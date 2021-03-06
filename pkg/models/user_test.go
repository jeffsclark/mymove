package models_test

import (
	"testing"

	"github.com/satori/go.uuid"

	. "github.com/transcom/mymove/pkg/models"
)

func TestUserCreation(t *testing.T) {

	fakeUUID, _ := uuid.FromString("39b28c92-0506-4bef-8b57-e39519f42dc1")
	userEmail := "sally@government.gov"

	newUser := User{
		LoginGovUUID:  fakeUUID,
		LoginGovEmail: userEmail,
	}

	if err := dbConnection.Create(&newUser); err != nil {
		t.Fatal("Didn't create user in db.")
	}

	if newUser.ID == uuid.Nil {
		t.Error("Didn't get an id back for user.")
	}

	if (newUser.LoginGovEmail != userEmail) &&
		(newUser.LoginGovUUID != fakeUUID) {
		t.Error("Required values didn't get set.")
	}
}

func TestUserCreationWithoutValues(t *testing.T) {

	newUser := &User{}

	expErrors := map[string][]string{
		"login_gov_email": []string{"LoginGovEmail can not be blank."},
		"login_gov_uuid":  []string{"LoginGovUUID can not be blank."},
	}

	verifyValidationErrors(newUser, expErrors, t)
}

func TestUserCreationDuplicateUUID(t *testing.T) {
	fakeUUID, _ := uuid.FromString("39b28c92-0506-4bef-8b57-e39519f42dc2")
	userEmail := "sally@government.gov"

	newUser := User{
		LoginGovUUID:  fakeUUID,
		LoginGovEmail: userEmail,
	}

	sameUser := User{
		LoginGovUUID:  fakeUUID,
		LoginGovEmail: userEmail,
	}

	dbConnection.Create(&newUser)
	err := dbConnection.Create(&sameUser)

	if err.Error() != `pq: duplicate key value violates unique constraint "constraint_name"` {
		t.Fatal("Db should have errored on unique constraint for UUID")
	}
}

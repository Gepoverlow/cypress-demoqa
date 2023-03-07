class DemoQAFormPage {

    ids = {
        firstName: '#firstName',
        lastName: '#lastName',
        email: '#userEmail',
        maleGender: '#gender-radio-1',
        femaleGender: '#gender-radio-2',
        otherGender: '#gender-radio-3',
        phoneNumber: '#userNumber',
        dob: '#dateOfBirthInput',
        subjects: '#subjectsInput',
        sportsHobby: '#hobbies-checkbox-1',
        readingHobby: '#hobbies-checkbox-2',
        musicHobby: '#hobbies-checkbox-3',
        picture: '#uploadPicture',
        address: '#currentAddress',
        city: '#react-select-3-input',
        state: '#react-select-4-input'

    }

    selectors = {
        // Form Input Selectors:
        firstNameInput: () => { return cy.get('#firstName') },
        lastNameInput: () => cy.get('#lastName'),
        emailInput: () => cy.get('#userEmail'),
        maleGenderRadio: () => cy.get('#gender-radio-1'),
        femaleGenderRadio: () => cy.get('#gender-radio-2'),
        otherGenderRadio: () => cy.get('#gender-radio-3'),
        phoneNumberInput: () => cy.get('#userNumber'),
        dobInput: () => cy.get('#dateOfBirthInput'),
        subjectsInput: () => cy.get('#subjectsInput'),
        sportsHobbiesCheckbox: () => cy.get('#hobbies-checkbox-1'),
        readingHobbiesCheckbox: () => cy.get('#hobbies-checkbox-2'),
        musicHobbiesCheckbox: () => cy.get('#hobbies-checkbox-3'),
        pictureInput: () => cy.get('#uploadPicture'),
        currentAddressInput: () => cy.get('#currentAddress'),
        cityInput: () => cy.get('#react-select-3-input'),
        stateInput: () => cy.get('#react-select-4-input'),

        // Funcionality Selectors:
        submitBtn: () => cy.get('#submit'),

        //Success Modal Selectors:
        modal: () => cy.get('.modal-content'),
        titleModal: () => cy.get('#example-modal-sizes-title-lg'),
        fullNameModal: () => cy.get('tbody > :nth-child(1) > :nth-child(2)'),
        emailModal: () => cy.get('tbody > :nth-child(2) > :nth-child(2)'),
        genderModal: () => cy.get('tbody > :nth-child(3) > :nth-child(2)'),
        phoneNrModal: () => cy.get('tbody > :nth-child(4) > :nth-child(2)'),
        dobModal: () => cy.get('tbody > :nth-child(5) > :nth-child(2)'),
        subjectsModal: () => cy.get('tbody > :nth-child(6) > :nth-child(2)'),
        hobbiesModal: () => cy.get('tbody > :nth-child(7) > :nth-child(2)'),
        pictureModal: () => cy.get('tbody > :nth-child(8) > :nth-child(2)'),
        addressModal: () => cy.get('tbody > :nth-child(9) > :nth-child(2)'),
        stateAndCityModal: () => cy.get('tbody > :nth-child(10) > :nth-child(2)')

    }

    typeFirstName(text: string) {
        this.selectors.firstNameInput().type(text)
    }

    typeLastName(text: string) {
        this.selectors.lastNameInput().type(text)
    }

    typeEmail(text: string) {
        this.selectors.emailInput().type(text)
    }

    typePhoneNr(text: string) {
        this.selectors.phoneNumberInput().type(text)
    }

    typeDob(text: string) {
        this.selectors.dobInput().type(text)
    }

    typeSubject(text: string) {
        this.selectors.subjectsInput().type(text)
    }

    typeCurrentAddress(text: string) {
        this.selectors.currentAddressInput().type(text)
    }

    typeCityAndState(city: string, state: string) {
        this.selectors.cityInput().click({ force: true }).type(city)
        this.selectors.stateInput().click({ force: true }).type(state)
    }

    selectGender(selection: number) {
        if (selection === 1) {
            this.selectors.maleGenderRadio().click({ force: true })
        }
        else if (selection === 2) {
            this.selectors.femaleGenderRadio().click({ force: true })
        }
        else if (selection === 3) {
            this.selectors.otherGenderRadio().click({ force: true })
        }
    }

    selectHobbie(selection: number) {
        if (selection === 1) {
            this.selectors.sportsHobbiesCheckbox().click({ force: true })
        }
        else if (selection === 2) {
            this.selectors.readingHobbiesCheckbox().click({ force: true })
        }
        else if (selection === 3) {
            this.selectors.musicHobbiesCheckbox().click({ force: true })
        }
    }

    uploadPicture(path: string) {
        this.selectors.pictureInput().selectFile(path)
    }

    submitForm() {
        return this.selectors.submitBtn().click({ force: true })
    }

}

export default new DemoQAFormPage()
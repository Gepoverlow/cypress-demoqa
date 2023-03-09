import RawIds from "./interfaces/rawIds"
import "cypress-real-events";

class DemoQAFormPage {

    ids: RawIds = {
        // Raw input ids
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
        state: '#react-select-4-input',

        //Raw functionality ids
        submit: '#submit',

        //Raw modal ids
        modal: '.modal-content',
        titleM: '#example-modal-sizes-title-lg',
        fullNameM: 'tbody > :nth-child(1) > :nth-child(2)',
        emailM: 'tbody > :nth-child(2) > :nth-child(2)',
        genderM: 'tbody > :nth-child(3) > :nth-child(2)',
        phoneM: 'tbody > :nth-child(4) > :nth-child(2)',
        dobM: 'tbody > :nth-child(5) > :nth-child(2)',
        subjectsM: 'tbody > :nth-child(6) > :nth-child(2)',
        hobbiesM: 'tbody > :nth-child(7) > :nth-child(2)',
        pictureM: 'tbody > :nth-child(8) > :nth-child(2)',
        addressM: 'tbody > :nth-child(9) > :nth-child(2)',
        stateAndCityM: 'tbody > :nth-child(10) > :nth-child(2)'

    }

    selectors = {
        // Form Input Selectors:
        firstNameInput: () => cy.get(this.ids.firstName),
        lastNameInput: () => cy.get(this.ids.lastName),
        emailInput: () => cy.get(this.ids.email),
        maleGenderRadio: () => cy.get(this.ids.maleGender),
        femaleGenderRadio: () => cy.get(this.ids.femaleGender),
        otherGenderRadio: () => cy.get(this.ids.otherGender),
        phoneNumberInput: () => cy.get(this.ids.phoneNumber),
        dobInput: () => cy.get(this.ids.dob),
        subjectsInput: () => cy.get(this.ids.subjects),
        sportsHobbiesCheckbox: () => cy.get(this.ids.sportsHobby),
        readingHobbiesCheckbox: () => cy.get(this.ids.readingHobby),
        musicHobbiesCheckbox: () => cy.get(this.ids.musicHobby),
        pictureInput: () => cy.get(this.ids.picture),
        currentAddressInput: () => cy.get(this.ids.address),
        cityInput: () => cy.get(this.ids.city),
        stateInput: () => cy.get(this.ids.state),

        // Funcionality Selectors:
        submitBtn: () => cy.get(this.ids.submit),

        //Success Modal Selectors:
        modal: () => cy.get(this.ids.modal),
        titleModal: () => cy.get(this.ids.titleM),
        fullNameModal: () => cy.get(this.ids.fullNameM),
        emailModal: () => cy.get(this.ids.emailM),
        genderModal: () => cy.get(this.ids.genderM),
        phoneNrModal: () => cy.get(this.ids.phoneM),
        dobModal: () => cy.get(this.ids.dobM),
        subjectsModal: () => cy.get(this.ids.subjectsM),
        hobbiesModal: () => cy.get(this.ids.hobbiesM),
        pictureModal: () => cy.get(this.ids.pictureM),
        addressModal: () => cy.get(this.ids.addressM),
        stateAndCityModal: () => cy.get(this.ids.stateAndCityM)

    }

    typeFirstName(text: string): void {
        this.selectors.firstNameInput().type(text)
    }

    typeLastName(text: string): void {
        this.selectors.lastNameInput().type(text)
    }

    typeEmail(text: string): void {
        this.selectors.emailInput().clear().type(text)
    }

    typePhoneNr(text: string): void {
        this.selectors.phoneNumberInput().clear().realType(text)
    }

    typeDob(text: string): void {
        this.selectors.dobInput().type(text)
    }

    typeSubject(text: string): void {
        this.selectors.subjectsInput().type(text)
    }

    typeCurrentAddress(text: string): void {
        this.selectors.currentAddressInput().type(text)
    }

    typeCityAndState(city: string, state: string): void {
        // We force through these clicks because there is another placeholder element on top of the inputs that blocks the action
        this.selectors.cityInput().click({ force: true }).type(city)
        this.selectors.stateInput().click({ force: true }).type(state)
    }

    selectGender(selection: number): void {
        // We force through these clicks because there is a label element on top of the radio input that blocks the action
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

    selectHobbie(selection: number): void {
        // We force through these clicks because there is a label element on top of the checkbox input that blocks the action
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

    uploadPicture(path: string): void {
        this.selectors.pictureInput().selectFile(path)
    }

    submitForm(): void {
        //We force through this click because the center of this element is hidden from view
        this.selectors.submitBtn().click({ force: true })
    }

}

export default new DemoQAFormPage()
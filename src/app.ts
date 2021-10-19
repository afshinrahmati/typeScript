interface Validatable {
  value: string | number
  required?: boolean | undefined
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
}
class ProjectInput {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLFormElement
  // 3 Input
  titleInputElement: HTMLInputElement
  descriptionInputElement: HTMLInputElement
  peopleInputElement: HTMLInputElement

  constructor() {
    // project-input ==> in templet Html
    this.templateElement = document.getElementById(
      'project-input',
    )! as HTMLTemplateElement
    // app ==> div
    this.hostElement = document.getElementById('app')! as HTMLDivElement

    // 1)importNode ===> show html
    const importedNode = document.importNode(this.templateElement.content, true)
    // 2) show first Element when importNode give html then we give id to this
    this.element = importedNode.firstElementChild as HTMLFormElement
    this.element.id = 'user-input'

    // there we give element like=> <input id="title"></input>
    this.titleInputElement = this.element.querySelector(
      '#title',
    ) as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector(
      '#description',
    ) as HTMLInputElement
    this.peopleInputElement = this.element.querySelector(
      '#people',
    ) as HTMLInputElement

    this.configure()
    this.attach()
  }

  // when click button
  @autobind
  private submitHandler(event: Event) {
    event.preventDefault()
    const userInput = this.gatherUserInput()
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput
      console.log(title, desc, people)
    }
  }
  private configure() {
    this.element.addEventListener('submit', this.submitHandler)
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element)
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value
    const enteredDescription = this.descriptionInputElement.value
    const enteredPeople = this.peopleInputElement.value

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    }
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    }

    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    }

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert('Invalid input, please try again!')
      return
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople]
    }
  }
}

function autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    },
  }
  return adjDescriptor
}

function validate(validatableInput: Validatable) {
  let isValid = true
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0
  }
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength
  }
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength
  }
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min
  }
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max
  }
  return isValid
}

const prjInput = new ProjectInput()

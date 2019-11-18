export function validatorLength(maxLength) {
  return function(value) {
    console.log('validatorLength')
    if (value.length > maxLength) {
      return {
        value: false,
        message: `Поле не должно содержать больше ${maxLength} символов`
      }
    }

    return {
      value: true,
      message: ``
    }

  }
}

export function validatorNotEmpty() {
  return function(value) {
    if (value.length <= 0) {
      return {
        value: false,
        message: ``
      }
    }

    return {
      value: true,
      message: ``
    }

  }
}

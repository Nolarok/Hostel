<template>
  <div class="file-loader">
    <div
      class="file-loader__load-area"
      @drag="prevent"
      @dragleave="prevent"
      @dragover="prevent"
      @drop="dropHandler"

      :style="{
        backgroundColor: getColorByStatus()
      }"
    >

      <p class="file-loader__info">
        {{message}}
      </p>

      <c-svg
        svg="excel"
        :prop="{height: '10rem'}"
      />

    </div>
  </div>
</template>

<script>
  import CSvg from "./c-svg"

  export default {
    name: "c-file-loader",
    components: {CSvg},
    props: {
      types: {
        type: Array,
        required: true
      },
      maxSize: {
        type: [Number, String],
        required: true
      }
    },

    data() {
      return {
        value: {},
        status: 'waiting',
        message: 'Перенесите файл с выгрузкой TravelLine в область загрузки'
      }
    },

    methods: {
      prevent(event) {
        event.stopPropagation()
        event.preventDefault()
      },

      dropHandler(event) {
        event.stopPropagation()
        event.preventDefault()

        const dt = event.dataTransfer
        const files = dt.files
        const reader = new FileReader()

        const isValid = this.validateFile(files[0])

        if (!isValid.success) {
          this.status = 'error'
          this.message = isValid.message

          this.$set(this, 'value', null)

          return
        }

        this.status = 'success'
        this.message = files[0].name

        reader.readAsDataURL(files[0])
        reader.onload = () => {
          this.$set(this, 'value', reader.result)
          this.$emit('change', reader.result)
        }
      },

      validateFile(file) {
        if (this.maxSize < file.size) return {
          success: false,
          message: 'Размер файла слишком большой'
        }

        if (!this.types.includes(file.type)) return {
          success: false,
          message: 'Некорректный формат файла'
        }

        return {
          success: true,
          message: file.name
        }
      },

      getColorByStatus() {
        const matches = {
          error: '#ffe0db',
          success: '#cbffd0',
          waiting: '#ffffff',
        }

        return matches[this.status]
      }

    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";

  .file-loader {
    display: flex;
    align-items: center;

    height: 22rem;
    width: 45rem;

    &__load-area {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      padding: 2rem;

      border: .3rem dashed $color-light-blue;
      border-radius: .5rem;
    }

    &__info {
      width: 30rem;

      color: $color-light-blue;
      font-size: 1.8rem;
      text-transform: uppercase;

      user-select: none;
    }

  }
</style>

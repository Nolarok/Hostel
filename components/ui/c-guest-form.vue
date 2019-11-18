<template>
  <c-form
    :form="'guests'"
    :cancel="cancel"
    :confirm="confirm"
    addClass="guests"
  >
    <template #default="formScope">
      <!--      checkin-->
      <!--      time-->
      <!--      checkout-->
      <!--      name-->
      <!--      fact-->
      <!--      category-->
      <!--      food-->
      <!--      bill-->
      <!--      payNotes-->
      <!--      contacts-->
      <!--      paid-->
      <!--      comment-->
      <!--      advanced-->
      <div class="form__content">
        <div class="form__row">
          <c-form-input
            :form="formScope.controls.form"
            :field="'checkin'"
            :label="'Дата заезда'"
            add-class="min"
          >
            <template #default="scope">
              <c-drop
                icon="calendar"
                :default="scope.controls.default"
                placeholder="Дата"
                size="1.3rem"
                @change="scope.controls.changeValue"
              >
                <template #default="scope">
                  <c-date-picker
                    :action="scope.controls.setValue"
                  />
                </template>
              </c-drop>
            </template>
          </c-form-input>

          <c-form-input
            :form="formScope.controls.form"
            :field="'time'"
            :label="'Время'"
            add-class="min"
          >
            <template #default="scope">
              <c-drop
                icon="triangle"
                :default="scope.controls.default"
                placeholder="Время"
                @change="scope.controls.changeValue"
              >
                <template #default="scope">
                  <c-menu
                    :data="['10:00', '10:30']"
                    :default="{index: 0}"
                    :action="scope.controls.setValue"
                  />
                </template>
              </c-drop>
            </template>
          </c-form-input>

          <c-form-input
            :form="formScope.controls.form"
            :field="'checkout'"
            :label="'Дата выезда'"
            add-class="min"
          >
            <template #default="scope">
              <c-drop
                icon="calendar"
                :default="scope.controls.default"
                placeholder="Дата"
                size="1.3rem"
                @change="scope.controls.changeValue"
              >
                <template #default="scope">
                  <c-date-picker
                    :action="scope.controls.setValue"
                  />
                </template>
              </c-drop>
            </template>
          </c-form-input>

        </div>

        <c-form-input
          :form="formScope.controls.form"
          :field="'contacts'"
          :label="'Контакты'"
        >
          <template #default="scope">
            <c-dropbox
              :action="scope.controls.changeValue"
              :default="scope.controls.default"
              dialog-title="Контакты"
            >
            </c-dropbox>
          </template>
        </c-form-input>

        <c-form-input
          :form="formScope.controls.form"
          :field="'name'"
          :label="'Ф.И.О'"
        >
          <template #default="scope">
            <c-dropbox
              :action="scope.controls.changeValue"
              :default="scope.controls.default"
              dialog-title="Ф.И.О"
            >
            </c-dropbox>
          </template>
        </c-form-input>

        <c-form-input
          :form="formScope.controls.form"
          :field="'food'"
          :label="'Питание'"
        >
          <template #default="scope">
            <c-drop
              icon="triangle"
              :default="scope.controls.default || []"
              placeholder="Выберите"
              @change="scope.controls.changeValue"

            >
              <template #default="scope">
                <c-menu
                  :data="['Обед', 'Завтрак']"
                  :default="{index: 1}"
                  :action="scope.controls.setValue"
                />
              </template>
            </c-drop>
          </template>
        </c-form-input>

        <c-form-input
          :form="formScope.controls.form"
          :field="'category'"
          :label="'Категория'"
        >
          <template #default="scope">
            <c-drop
              icon="triangle"
              :default="scope.controls.default || []"
              placeholder="Выберите"
              @change="scope.controls.changeValue"

            >
              <template #default="scope">
                <c-menu
                  :data="['Категория-1', 'Категория-2']"
                  :default="{index: 1}"
                  :action="scope.controls.setValue"
                />
              </template>
            </c-drop>
          </template>
        </c-form-input>

        <c-form-input
          :form="formScope.controls.form"
          :field="'fact'"
          :label="'Факт, бронь счет'"
        >
          <template #default="scope">
            <c-input
              :action="scope.controls.changeValue"
              :options="{
                default: scope.controls.default,
              }"
            />
          </template>
        </c-form-input>

        <c-form-input
          :form="formScope.controls.form"
          :field="'paid'"
          :label="'Оплата'"
        >
          <template #default="scope">
            <c-input
              :action="scope.controls.changeValue"
              :options="{
                default: scope.controls.default,
              }"
            />
          </template>
        </c-form-input>

        <c-form-input
          :form="formScope.controls.form"
          :field="'payNotes'"
          :label="'Отметки об оплате'"
        >
          <template #default="scope">
            <c-input
              :action="scope.controls.changeValue"
              :options="{
                default: scope.controls.default,
              }"
            />
          </template>
        </c-form-input>

        <c-form-input
          :form="formScope.controls.form"
          :field="'bill'"
          :label="'Стоимость, счет'"
        >
          <template #default="scope">
            <c-input
              :action="scope.controls.changeValue"
              :options="{
                default: scope.controls.default,
              }"
            />
          </template>
        </c-form-input>

        <c-form-input
          :form="formScope.controls.form"
          :field="'comment'"
          :label="'Комментарий гостя'"
          add-class="area"
        >
          <template #default="scope">
            <c-input
              :action="scope.controls.changeValue"
              :options="{
                default: scope.controls.default,
                type: 'textarea'
              }"
            />
          </template>
        </c-form-input>

        <c-form-input
          :form="formScope.controls.form"
          :field="'advanced'"
          :label="'Комментарий'"
          add-class="area"
        >
          <template #default="scope">
            <c-input
              :action="scope.controls.changeValue"
              :options="{
              default: scope.controls.default,
              type: 'textarea'
            }"
            />
          </template>
        </c-form-input>
      </div>

    </template>
  </c-form>

</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'
  import CForm from "./c-form"
  import CFormInput from "./c-form-input"
  import CInput from "./c-input"
  import CDrop from "./c-drop"
  import CDatePicker from "./c-date-picker"
  import CMenu from "./c-menu"
  import CDropbox from "./c-dropbox"

  export default {
    name: "c-guest-form",
    components: {CDropbox, CMenu, CDatePicker, CDrop, CInput, CFormInput, CForm},
    props: {
      cancel: {
        type: Function,
        required: true
      },
      default: {
        type: [String, Number],
      }
    },
    computed: {
      ...mapGetters('forms', ['GET_ALL_VALUES']),
      ...mapGetters('users', ['GET_ROW_DATA']),
    },
    methods: {
      ...mapMutations('users', ['CREATE_RECORD', 'EDIT_RECORD']),
      ...mapMutations('forms', ['CHANGE_VALUES', 'CLEAR']),

      confirm() {
        let data = this.GET_ALL_VALUES({form: 'guests'})
        console.log('DATA', data)

        data = [
          ['not_check_in'],
          data.checkin, data.time,
          data.checkout, data.name,
          data.fact, data.category,
          data.food, data.bill,
          data.payNotes, data.contacts,
          data.paid, data.comment,
          data.advanced,
          ['edit_guest', 'remove', 'fill']
        ]

        if (this.default) {
          this.EDIT_RECORD({
            data,
            id: this.default,
            table: 'guests'
          })
        } else {
          this.CREATE_RECORD({
            data,
            table: 'guests'
          })
        }

      }
    },
    created() {
      console.log('created')
      // return

      if (this.default) {
        const rowData = this.GET_ROW_DATA({id: this.default, table: 'guests'})

        console.log('rowData', rowData)

        this.CHANGE_VALUES({
          form: 'guests',
          data: {
            checkin: rowData[3],
            time: rowData[4],
            checkout: rowData[5],
            name: rowData[6],
            fact: rowData[7],
            category: rowData[8],
            food: rowData[9],
            bill: rowData[10],
            payNotes: rowData[11],
            contacts: rowData[12],
            paid: rowData[13],
            comment: rowData[14],
            advanced: rowData[15],
          }
        })
      } else {
        this.CLEAR({form: 'guests'})
      }
    }
  }
</script>

<style lang="scss">
  .guests.form {
    width: 70rem;

    .form {
      &__content {
        display: grid;

        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2rem;
      }

      &__row {
        grid-column: 1 / 3;
        display: grid;

        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 2rem;
      }
    }

    .form-input.min {
      grid-template-columns: 8rem 12rem;
    }

    .form-input.area {
      align-items: flex-start;
    }
  }
</style>

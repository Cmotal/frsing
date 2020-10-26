<template>
  <div>
    <h3>{{ isNew ? '创建' : '编辑' }}列表</h3>
    <ele-form
      v-model="data"
      :form-desc="columns"
      :request-fn="submit"
    ></ele-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class CourseEdit extends Vue {
  @Prop(String) id!: string
  data = {}

  columns = {
    title: { label: '标题', type: 'input' },
    cover: { label: '封面图', type: 'input' }
  }

  get isNew() {
    return !this.id
  }

  async submit(data: string) {
    const url = this.isNew ? 'courses' : `courses/${this.id}`
    const method = this.isNew ? 'post' : 'put'
    await this.$http[method](url, data)
    this.data = {}
    this.$message.success('保存成功')
    this.$router.go(-1)
  }

  async fetch() {
    const res = await this.$http.get(`courses/${this.id}`)
    this.data = res.data
  }

  created() {
    !this.isNew && this.fetch()
  }
}
</script>

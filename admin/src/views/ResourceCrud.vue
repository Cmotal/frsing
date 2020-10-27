<template>
  <div>
    <avue-crud
      v-if="option.column"
      :page="page"
      :option="option"
      :data="data.data"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="changePage"
      @sort-change="changeSort"
      @search-change="search"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class ResourceList extends Vue {
  @Prop(String) resource!: string
  data: any = {}
  option: any = {}
  page: any = {
    total: 0,
    pagerCount: 5
  }
  query: any = {
    limit: 2
  }

  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`)
    this.option = res.data
  }

  async changePage({ pageSize, currentPage }: any) {
    this.query.page = currentPage
    this.query.limit = pageSize
    this.fetch()
  }

  async changeSort({ prop, order }: any) {
    if (!order) {
      this.query.sort = null
    } else {
      this.query.sort = {
        [prop]: order === 'ascending' ? 1 : -1
      }
    }
    this.fetch()
  }

  async search(where: any, done: any) {
    for (const k in where) {
      const field = this.option.column.find((v: any) => v.prop === k)
      if (field.regex) {
        where[k] = { $regex: where[k] }
      }
    }
    this.query.where = where
    this.fetch()
    done()
  }

  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: { query: this.query }
    })
    this.page.total = res.data.total
    this.data = res.data
  }

  async create(row: any, done: any, loading: any) {
    await this.$http.post(`${this.resource}`, row)
    this.$message.success('创建成功')
    this.fetch()
    done()
  }

  async update(row: any, index: any, done: any, loading: any) {
    const data = JSON.parse(JSON.stringify(row))
    delete data.$index
    await this.$http.put(`${this.resource}/${row._id}`, data)
    this.$message.success('更新成功')
    this.fetch()
    done()
  }

  async remove(row: any) {
    try {
      await this.$confirm('确认删除？')
    } catch (e) {
      return
    }
    await this.$http.delete(`${this.resource}/${row._id}`)
    this.$message.success('删除成功')
    this.fetch()
  }

  created() {
    this.fetchOption()
    this.fetch()
  }
}
</script>

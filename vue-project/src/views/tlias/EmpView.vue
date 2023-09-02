<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
      form: {
        user: '',
        gender: '',
        entryDate: [],
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(JSON.stringify(this.form));

    },
    handleSizeChange(val) {
      console.log("每页 %s 条", val);
    },
    handleCurrentChange(val) {
      console.log("当前页: %s", val);
    },
  },
  mounted() {
    axios.get("https://yapi.pro/mock/80668/emp/list").then((result) => {
      this.tableData = result.data.data;
    })
  }
}

</script>

<template>
  <div>
    <el-container style="height: 900px; border: 1px solid #eee">
      <el-header style="font-size:40px;background-color: rgb(238, 241, 246)">tlias 智能学习辅助系统</el-header>

      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>系统信息管理</template>
              <el-menu-item index="1-1">
                <router-link to="/dept">部门管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/emp">员工管理</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="姓名">
              <el-input v-model="form.user" placeholder="请输入员工姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="form.gender" placeholder="请选择">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="入职时间">
              <el-date-picker
                  v-model="form.entryDate"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>

          <el-table :data="tableData">
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column label="图像" width="180">
              <template slot-scope="scope">
                <img :src="scope.row.image" width="100px" height="100px">
              </template>
            </el-table-column>
            <el-table-column label="性别" width="140">
              <!--              TODO 插槽-->
              <template slot-scope="scope">
                {{ scope.row.gender == 1 ? '男' : '女' }}
              </template>
            </el-table-column>
            <el-table-column prop="job" label="职位" width="140"></el-table-column>
            <el-table-column prop="entrydate" label="入职日期" width="180"></el-table-column>
            <el-table-column prop="updatetim" label="最后操作时间" width="230"></el-table-column>
            <el-table-column label="操作">
              <el-button type="primary" size="mini">编辑</el-button>
              <el-button type="danger" size="mini">删除</el-button>
            </el-table-column>
          </el-table>
          <br>

          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              background
              layout="sizes, prev, pager, next, jumper, total"
              :total="1000">
          </el-pagination>
        </el-main>
      </el-container>
    </el-container>

  </div>


</template>

<style>

</style>
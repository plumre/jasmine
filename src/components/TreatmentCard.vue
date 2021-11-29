<template>
<div class="treatment-card">
  <el-row>
    <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }" :class="1===1? '' : cardBackground[index]">
<!--        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
        <div style="padding: 14px;">
          <div class="card-main-section">

          <span class="customer-name">乔布斯</span>
          </div>

          <div class="bottom clearfix">
            <time class="time">{{ currentDate | showDateTime }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
import {DATE_TIME_FORMATTER} from "common/const";
import {dateFormat} from "common/utils";

export default {
  name: "TreatmentCard",
  data() {
    return {
      currentDate: new Date(),
      cardBackground:[
          'card-background-to-treat',
          'card-background-to-quote',
          'card-background-to-cash',
          'card-background-to-remind',
          'card-background-to-trace',
      ]
    };
  },
  filters: {
    showDateTime(date) {
      console.log(date);
      return dateFormat(date, DATE_TIME_FORMATTER)
    }
  }
}
</script>

<style scoped>
.card-main-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}


.card-background-to-treat {
  background: rgba(100,130,190,0.6);
}
.card-background-to-quote {
  background: rgba(190,130,190,0.6);
}
.card-background-to-cash {
  background: rgba(210,190,160,0.6);
}
.card-background-to-remind {
  background: rgba(250,200,230,0.6);
}
.card-background-to-trace {
  background: rgba(150,190,100,0.6);
}

.customer-name {
  font-size: xxx-large;
}
</style>

<style>

.el-card {
  height: 200px;
}


.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
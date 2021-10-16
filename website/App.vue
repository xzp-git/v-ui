<template>
  <div>
    <v-button icon="loading" @click="buttonClick"  round>按钮</v-button>
    <v-button icon="menu" type="success"   round></v-button>
    <v-button icon="loading" type="danger"   round>按钮</v-button>
    <!-- <v-icon name="loading"></v-icon> -->

    <v-button-group>
      <v-button type="primary" icon="edit"></v-button>
      <v-button type="primary" icon="share"></v-button>
      <v-button type="primary" icon="delete"></v-button>
    </v-button-group>
   <hr>
      <v-row >
        <v-col :span="6"><div style="background:red">111</div></v-col>
        <v-col :span="6"><div style="background:black">222</div></v-col>
        <v-col :span="6" :offset="6"><div style="background:pink">333</div></v-col>
      </v-row>

      <div style="outline:3px purple solid; width:80%; margin:0 auto">
        <v-row :gutter="10">
          <v-col :span="6"><div style="background:red">111</div></v-col>
          <v-col :span="6"><div style="background:black">222</div></v-col>
          <v-col :span="6" ><div style="background:pink">333</div></v-col>
          <v-col :span="6"><div style="background:green">444</div></v-col>
        </v-row>
      </div>

      <div style="outline:3px purple solid; width:80%; margin:0 auto">
        <v-row :gutter="10" justify="space-around">
          <v-col :span="2"><div style="background:red">111</div></v-col>
          <v-col :span="2"><div style="background:black">222</div></v-col>
          <v-col :span="2" ><div style="background:pink">333</div></v-col>
          <v-col :span="2"><div style="background:green">444</div></v-col>
        </v-row>
      </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'
const useButton = () => {
  const buttonClick = () => {
    console.log('button-click')
  }

  return {
    buttonClick
  }
}

export default defineComponent({
  setup () {
    return {
      ...useButton()
    }
  }
})
</script>

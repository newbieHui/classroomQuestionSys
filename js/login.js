var RoleComponent = {
    template: "#role-template",

    data: function () {
        return {
            formStore: {
                name: ''
            },
            nameStore:['张美慧','洪艺琛','付文博','王蓉','杨怡宁','姜灿','陈奥运','陈依璇','杨宁','高煊洲','杨航',
                '许航','张露','彭璟','杨芸芸','赵敏娜','王珠峰','王斌','韦菲菲','高佳莉','赵思成','赵继强','赵秀娟',
                '赵嘉亮','田敏','王霞','赵琦文','付鹏鹏'],
        };
    },

    methods: {
        confirmButton:function(){
            this.refresh(10);
        },
        refresh:function(num){
            var __this=this;
            this.timer = window.setInterval(function(){
                __this.randomNumber();
            },num);
        },
        randomNumber :function(){
            var num = Math.floor(Math.random()*(1 - 28) + 28);
            this.formStore.name = this.nameStore[num];
        },
        stopButton(){
            window.clearInterval(this.timer);
            this.$alert("请" + this.formStore.name + "同学回答问题！", '提示', {
                confirmButtonText: '确定',
            });
        },
        resetForm: function (formName) {
            this.$refs[formName].resetFields();
        },
    }
};

Vue.component("role-component", RoleComponent);
new Vue({
    el: "#app"
});
<template>
	<div class="top">
	    <div class="banxin">
	   	   <h2 class="tel left" :style="img1">财富热线：<img src="../../../static/images/red_tel.png"></h2>
		   <h3 class="partake right" :style="img2"></h3>
	   </div>
	</div>
</template>

<script>
export default {
    data(){
   	    return {
   	        img1: {
	            backgroundImage: "url(" + require("../../../static/images/tel.png") + ")",
	            backgroundRepeat: "no-repeat",
	            backgroundPosition: "center left"
	        },
   	        img2: {
	            backgroundImage: "url(" + require("../../../static/images/partake.png") + ")",
	            backgroundRepeat: "no-repeat",
	            backgroundPosition: "center right"
	        }
   	    }
    }
}
</script>


<style lang="less" scoped>
    .top {
    	width: 100%;
	    height: 40px;
	    background: #F4F5F9;
	    overflow: hidden;
	    line-height: 40px;
	    font-size: 14px;

	    .tel {
	    	width: 300px;
			height: 40px;
		    text-indent: 25px;
            background: url("https://ly809652226.github.io/test/images/tel.png") no-repeat center left;
	        img {
	          vertical-align: -3px;
	        }
	    }
        .partake{
	        width: 200px;
	        height: 40px;
           
        }
    
    }
</style>
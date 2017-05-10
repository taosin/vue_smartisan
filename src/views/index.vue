<template>
	<div class="index">
		<div>
			<!-- <div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">Slide 1</div>
					<div class="swiper-slide">Slide 2</div>
					<div class="swiper-slide">Slide 3</div>
					<div class="swiper-slide">Slide 4</div>
					<div class="swiper-slide">Slide 5</div>
				</div>
				<div class="swiper-pagination index-pagination"></div>
			</div> -->
		</div>
	</div>
</template>

<script>
	require('./../../static/css/swiper.min.css');
	require('./../../static/js/swiper.min.js');
	export default {
		components:{
		},
		data () {
			return {
			}
		},
		mounted(){
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				direction: 'vertical',
				slidesPerView: 1,
				paginationClickable: true,
				spaceBetween: 0,
				mousewheelControl: true,
				keyboardControl : true,
				height : window.innerHeight,
				topI:0,
			});
			// window.onscroll = function () {
			// 	this.topI = document.body.scrollTop||document.documentElement.scrollTop;
			// 	console.info(this.topI);
			// };
		}
	}
</script>
<style scoped>
	.swiper-container {
		width: 100%;
		height: 100%;
		margin-top: 100px;
	}
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		width: 100%;
		height: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		border-bottom: 1px solid red;
	}
	.index-pagination{

	}
	.index{
		height: 1000px;
	}
</style>

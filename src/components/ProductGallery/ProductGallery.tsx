import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import styles from './ProductGallery.module.sass';

export default function ProductGallery({ images }: { images: string[] }) {
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

	return (
		<>
			<Swiper
				style={
					{
						'--swiper-navigation-color': 'lightgray',
						'--swiper-pagination-color': 'lightgray',
						height: '80%',
					} as React.CSSProperties
				}
				loop={true}
				spaceBetween={10}
				navigation={true}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
				modules={[FreeMode, Navigation, Thumbs]}
				className={styles.mySwiper}
			>
				{images?.map((item: string, index: number) => (
					<SwiperSlide key={index}>
						<img src={item} alt='product images' />
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className={styles.mySwiper2}
				style={{ height: '20%' }}
			>
				{images?.map((item: string, index: number) => (
					<SwiperSlide key={index}>
						<img src={item} alt='product images' />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

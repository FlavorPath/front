import { API_PATH } from '@/api/api-path';
import { HttpResponse, http } from 'msw';
import { delayForDevelopment } from '.';

export const reviewHandler = [
	// 리뷰 작성
	http.post(`${API_PATH.restaurant}/reviews`, async ({request, params}) => {
		const restaurantId = params.id;
		const { content } = (await request.json()) as { content: string };

		if (!content) {
			return HttpResponse.json({
        success: false,
        message: '리뷰 내용을 입력해주세요.',
      });
		}

		console.log(`${restaurantId} 식당 리뷰 추가: ${content}`)

		await delayForDevelopment();
		return HttpResponse.json({
			success: true,
			message: '리뷰가 성공적으로 작성되었습니다.'
		})
	}),
	// 리뷰 수정
  http.put(`${API_PATH.review}/:id`, async ({ request, params }) => {
    const reviewId = params.id;
    const { content } = (await request.json()) as { content: string };

    console.log(`${reviewId} 리뷰 수정: ${content}`);

    await delayForDevelopment();
    return HttpResponse.json({
      success: true,
      updatedAt: new Date().toISOString().slice(0, 10),
    });
  }),
];

export default async function getArticleData() {
    try {
        const response = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 97848e8babeb149f26a044838f1fcb6f52d60e7b',
            }});
        const data = await response.json();

        const customerResponse = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api/customer-list/', { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 97848e8babeb149f26a044838f1fcb6f52d60e7b',
            }});
        const customerData = await customerResponse.json();

        const filterPhotographyData = data.filter((item) => item.prompt === "Photography");
        const filterLearningData = data.filter((item) => item.prompt === "Learning");
        return {
            photographyData: filterPhotographyData,
            learningData: filterLearningData,
            customerData,
        };
    } catch (error) {
        console.error('Error fetching article data:', error);
        return { photographyData: [], learningData: [], customerData:[] }; // Fallback empty data
    }
}

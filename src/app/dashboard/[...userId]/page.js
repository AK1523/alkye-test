import { Box, Typography } from '@mui/material'
import Carousel from './carousel';
import getArticleData from '../../utils/api'; 

const Page = async ({params}) => {
    const { photographyData, learningData, customerData } = await getArticleData();
    const { userId } = params;
    console.log('userId :', userId);
    const currentUser = customerData.find((customer) => customer.id === Number(userId));
  return (
    <Box
        sx={{
            minHeight: "60vh",
            bgcolor: "#000",
            p: 10,
        }}
    >
        <Typography variant="h1" sx={{mb: 2, color: "#FFFFFF"}}>Welcome {currentUser?.customer_name}</Typography>
        <Typography variant="h5" sx={{mb: 2,  color: "#FFFFFF"}}>
            Hope you having a good day!
        </Typography>
        <Carousel title="Photography" data={photographyData}/>
        <Carousel title="Learning" data={learningData}/>
    </Box>
  )
}

export default Page
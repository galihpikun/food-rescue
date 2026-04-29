import { Prisma } from "@prisma/client";

export const createOrder = async (req, res) => {
    const {productId, quantity, deliveryType} = req.body;
    const userId = req.user.id;

    try {
        const product = awai prisma.product.findUnique({
            where: { id: productId },
            include: { restaurant: true }
        });

        if (!product) {
            return res.status
        }

        
    } catch (error) {
        
    }
    
}
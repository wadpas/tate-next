import { Order, Product } from '@/generated/prisma'
import { formatCurrency } from '@/lib/formatters'
import { Button, Column, Img, Row, Section, Text } from '@react-email/components'

const dateFormatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium' })

export function OrderInformation({ order, product }: { order: Order; product: Product }) {
  return (
    <>
      <Section>
        <Row>
          <Column>
            <Text className='mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>Order ID</Text>
            <Text className='mt-0 mr-4'>{order.id}</Text>
          </Column>
          <Column>
            <Text className='mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>Purchased On</Text>
            <Text className='mt-0 mr-4'>{dateFormatter.format(order.createdAt)}</Text>
          </Column>
          <Column>
            <Text className='mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4'>Price Paid</Text>
            <Text className='mt-0 mr-4'>{formatCurrency(order.total)}</Text>
          </Column>
        </Row>
      </Section>
      <Section className='border border-solid border-gray-500 rounded-lg p-4 md:p-6 my-4'>
        <Img
          width='300px'
          height='auto'
          alt={product.name}
          src={`${product.imagePath}`}
        />
        <Row className='mt-8'>
          <Column className='align-bottom'>
            <Text className='text-lg font-bold m-0 mr-4'>{product.name}</Text>
          </Column>
          <Column align='right'>
            <Button className='bg-black text-white px-6 py-4 rounded text-lg'>
              <a href={product.filePath}>Download</a>
            </Button>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text className='text-gray-500 mb-0'>{product.description}</Text>
          </Column>
        </Row>
      </Section>
    </>
  )
}

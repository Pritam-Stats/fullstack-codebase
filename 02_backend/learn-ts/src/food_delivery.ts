type Gender = "Male" | "Female"
interface UserID {
    id: number
}

type User = {
    name : string,
    id: UserID,
    gender: Gender,
    isAdult: boolean
}
type OrderID = number | string;
type CustomerID = number|string;
interface Customer {
    user: User,
    cust_id: CustomerID,
    orderID: OrderID
}

interface OrderRecord {
    createdAt: Date,
    platform: 'android' | 'iOS' | 'Web',
    throughAd: boolean
}

interface Order {
    id: OrderID
    details: OrderRecord
    count: number
}
type PaymentType = 'COD' | 'Prepaid'

type Banks = 
    |'sbi' 
    |'hdfc' 
    |'axis' 
    |'kotak' 
    |'ICICI'


interface PaymentMethod {
    service: 'card' | 'UPI' | 'credit',
    bank: Banks,
    coupon: boolean
}
type CurrentStatus = 'On the way' | 'Delivered' | 'Canceled' 
interface Status {
    current: CurrentStatus
}
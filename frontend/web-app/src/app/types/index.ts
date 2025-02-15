export type PagedResult<T> = {
    results: T[]
    pageCount: number
    totalCount: number
}

export type Auction = {
    id: string
    reservePrice: number
    seller: string
    winner?: string
    soldAmount: number
    currentHighBid: number
    createdAt: string,
    updatedAt: string,
    auctionEnd: string,
    status: string,
    make: string,
    model: string,
    year: number,
    color:  string,
    mileage: number,
    imageUrl: string,
}

export type Bid = {
    id: string
    auctionId: string
    bidder: string
    bidTime: string
    amount: number
    bidStatus: string
}

export enum BidStatus
{
    Accepted,
    AcceptedBelowReserved,
    TooLow,
    Finished
}

export type Page = {
    pageNumber: number
    pageSize: number
    pageCount: number
    searchTerm: string
    searchValue: string
    orderBy: string
    filterBy: string
    seller?: string
    winner?: string
}

export type Data = {
    auctions: Auction[],
    pageCount: number,
    totalCount: number,
}

export type AuctionFinished = {
    itemSold: boolean
    auctionId: string
    winner?: string
    seller: string
    amount?: number
}
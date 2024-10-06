export interface Course {
  teacher: string,
  name: string,
  description: string,
  image: string,
  type: "ILETS" | "Toeic",
  status: boolean,
  fee: number,
  quantitySession: null,
  startDatetime: string,
  endDatetime: string,
  createdAt: string,
  updatedAt: string,
}

export  interface User {
  id: number,
  username: string,
  email: string,
  role: string,
  is_active?: boolean,
  date_of_birth?: Date,
  image_of_user?: string
}

export interface Note {
  id: number,
  user_id: number,
  type_note: string,
  title: string,
  content?: Array<File>,
  images?: Array<string>,
  tags: Array<string>,
  pinned: boolean,
  number_order: number,
}

export interface Notification {
  id: number,
  sender: number,
  recipient: number,
  notification_type: string,
  message: string
}


const userResource: User = {
  id: 0,
  username: "qnam quan",
  email: "quanlhn@gmail.com",
  role: "user"
}

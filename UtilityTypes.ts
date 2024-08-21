// TASK 1
interface User {
  id: number;
  name: string;
  email: string;
}
type PartialUser = Partial<User>;
//TASK 2
interface Product {
  id: number;
  name: string;
  price: number;
}
type ReadonlyProduct = Readonly<Product>;
//TASK 3
interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
}
type BasicEmployee = Pick<Employee, "id" | "name">;
// TASK 4
type Roles = "admin" | "user" | "guest" | "superadmin";
type BasicRoles = Exclude<Roles, "guest" | "superadmin">;
// TASK 5
interface Settings {
  theme: string;
  language: string;
  notifications: boolean;
}
type ConfigurableSettings = Readonly<Partial<Settings>>;

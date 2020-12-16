// @flow
type Props = {
    id?: number,
    jwt?: string,
    fullName?: string,
    email?: string,
    avatar?: string,
    role?: Array<number>,
    company?: {
      id: number,
      owner: number,
      name: string,
      screenname: string,
      istrial: number,
      datetrialexpired: number,
      modules: Array<number>
    }
  };
  
  type JsonProps = {
    id: number,
    jwt: string,
    fullname: string,
    email: string,
    avatar: string,
    role: Array<number>,
    company?: {
      id: number,
      owner: number,
      name: string,
      screenname: string,
      istrial: number,
      datetrialexpired: number,
      modules: Array<number>
    }
  };
  
  class LoginAccountModel {
    id: number;
    jwt: string;
    fullName: ?string;
    email: string;
    avatar: string;
    role: Array<number>;
    company: ?{
      id: number,
      owner: number,
      name: string,
      screenname: string,
      istrial: number,
      datetrialexpired: number,
      modules: Array<number>
    };
  
    constructor({ id, jwt, fullName, email, avatar, role, company }: Props) {
      this.id = id || 0;
      this.jwt = jwt || "";
      this.fullName = fullName || "";
      this.email = email || "";
      this.avatar = avatar || "";
      this.role = role || [];
      this.company = company || {
        id: 0,
        owner: 0,
        name: "",
        screenname: "",
        istrial: 0,
        datetrialexpired: 0,
        modules: []
      };
    }
  
    fromJson({ id, jwt, fullname, email, avatar, role, company }: JsonProps) {
      this.id = id;
      this.jwt = jwt;
      this.fullName = fullname;
      this.email = email;
      this.avatar = avatar;
      this.role = role;
      this.company = company;
    }
  
    toJson() {
      return JSON.stringify({
        id: this.id,
        jwt: this.jwt,
        fullname: this.fullName,
        email: this.email,
        avatar: this.avatar,
        role: this.role,
        company: this.company
      });
    }
  }
  
  export default LoginAccountModel;
  
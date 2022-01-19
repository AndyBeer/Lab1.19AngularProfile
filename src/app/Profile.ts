export class Profile{
    id: number;
    name: string;
    phone: number;
    email: string;
    bio: string;
    profileImg: string;

    constructor(id:number, name:string, phone:number, email:string, bio:string, profileImg:string){
        this.id=id;
        this.name=name;
        this.phone=phone;
        this.email=email;
        this.bio=bio;
        this.profileImg=profileImg;
    }


}
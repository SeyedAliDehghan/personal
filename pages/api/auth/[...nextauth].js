import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import Admin from '../../../models/admin'

export default NextAuth({
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                username:{label:"Email",type:"email",placeholder:"name@test.com"},
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials){
                // ? Database Look up
                // console.log(credentials)
                try{
                    const response=await axios.post(process.NEXT_PUBLIC_URL+'/api/admin/login',{email:credentials.username,password:credentials.password})
                    if(response){
                        return response.data.admin
                    }
                }catch(e){
                    return null
                }  
            }
        })
    ],
    callbacks:{
        jwt:async({token,user})=>{
            if(user){
                token.id=user.id
            }
            return token
        },
        session:({session,token})=>{
            if(token){
                session.id=token.id
            }
            return session
        }
    },
    secret:"test",
    jwt:{
        secret:process.env.NEXTAUTH_SECRET,
        encryption:true
    }
})

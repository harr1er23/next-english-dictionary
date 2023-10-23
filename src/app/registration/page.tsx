"use client"
import {useState} from 'react';
import styles from "./styles.module.scss";
import 'bootstrap/dist/css/bootstrap.css';
import Input from "@/components/input";
import { useRouter } from 'next/navigation';

export default function Registration(){
  const [nickName, setNickName] =useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState('')
  const router = useRouter();
  return (
    <div className={styles.backgroundLogin}>
      <h4>Регистрация</h4>
      <div className="mb-3">
        <div>Nick</div>
        <Input
          type={"text"}
          value={nickName}
          onChangeFunction={setNickName}
          textPlaceholder={"Enter your nickname"}
        />
      </div>
      <div className="mb-3">
        <div>Email</div>
        <Input
          type={"email"}
          value={email}
          onChangeFunction={setEmail}
          textPlaceholder={"Enter your email"}
        />
      </div>
      <div className="mb-3">
        <div>Password</div>
        <Input
          type={"password"}
          value={pass}
          onChangeFunction={setPass}
          textPlaceholder={"Enter your password"}
        />
      </div>
      <div className="mb-3">
        <div>Confirm Password</div>
        <Input
          type={"password"}
          value={confirmPass}
          onChangeFunction={setConfirmPass}
          textPlaceholder={"Confirm your password"}
        />
      </div>
      <span onClick={() => router.replace("/login")} className={styles.buttonToLogin}>
        Уже есть аккаунт?
      </span>
      <div className={styles.loginButtons}>
        <div className="btn btn-primary">
          Зарегистрироваться
        </div>
      </div>
    </div>
  )
}

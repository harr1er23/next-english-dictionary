"use client"
import {useState} from 'react';
import styles from "./styles.module.scss";
import Input from '@/components/input';
import { useRouter } from 'next/navigation';

export default function Login(){
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  return (
    <div className={styles.backgroundLogin}>
      <h4>Вход</h4>
      <div className="mb-3">
        <div>Email</div>
        <Input type={"email"}
          value={email}
          onChangeFunction={setEmail}
          textPlaceholder={"Enter your email"}/>
      </div>
      <div className="mb-3">
        <div>Password</div>
        <Input type={"password"}
          value={pass}
          onChangeFunction={setPass}
          textPlaceholder={"Enter your password"}/>
      </div>
      <div className={styles.loginButtons}>
      <div
        onClick={() => router.replace("/registration")}
        data-type="submit"
        className="btn btn-primary"
      >
        Регистрация
      </div>
      <div
        data-type="submit"
        className="btn btn-primary"
      >
        Войти
      </div>
      </div>
    </div>
  )
}


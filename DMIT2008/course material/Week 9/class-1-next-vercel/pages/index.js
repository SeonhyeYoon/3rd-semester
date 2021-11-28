import AppBar from "../components/appbar"

export default function Home() {
  return (
    <div>
      <AppBar brand={"unicorn"} company={"a company"} signIn={"user login"} uiStyles={"light"}/>
    </div>
  )
}
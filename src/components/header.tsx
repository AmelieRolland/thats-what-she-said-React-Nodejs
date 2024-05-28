import Image from "next/image"
import style from "./header.module.css"

export default function Header() {
  return (
    <>
    <header>
      <nav className="navbar navbar-expand-lg justify-content-lg-between pt-4">

        <div className="container">

          <div>
            <a href="#">
              <img className="img-fluid" />
              <Image src="/img/logo3.png" alt="" width={500} height={60}/>
            </a>
          </div>

        </div>
      </nav>
    </header >
    <section className={style.banderole}>
            <div className="py-3">
                <div className={`${style.rosefonce} p-4 my-lg-5`}>
                    <div className="container">
                        <div className="flex justify-end align-end">
                            <div><h1 className={style.bandeau}>But what did she said?</h1></div>                    
                        </div>
                    </div>
                    
                </div>
            </div>

    </section>
    </>
  )
}
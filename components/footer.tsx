import Link from "next/link";

export default function Footer() {
    return(
        <div>
            <footer className="body-font">
                <div>
                    <div className="flex px-5 py-6">
                    <a className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 px-2" href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fbobong.blog&count_bg=%23A5AAA0&title_bg=%23555555&icon=protocols-dot-io.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 px-2">© 2024 Bobong</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
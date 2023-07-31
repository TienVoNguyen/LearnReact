import { useEffect, useState, memo } from "react";

/*
    - Side effects: khi có tác động dẫn tới dữ liệu bị thay đổi trong chương trình phần mềm.
    *** useEffect(callback)
        - Gọi callback mỗi khi component re-render.
        - Gọi callback sau khi component được thêm vào DOM.
    *** useEffect(callback, [])
        - Chỉ gọi callback mỗi khi component được mounted
    *** userEffect(callback, [deps])
        - Calback được gọi mỗi khi "deps" thay đổi.
    *** Áp dụng cả 3 trường hợp:
        1. Callback luôn được gọi sau khi component mounted.
        2. Cleanup function (hàm được return trong callback) luôn được gọi trước khi components bị unmounted.
        3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần đầu mounted).
 */

const tabs = ['posts', 'photos', 'albums']
const names = ['NTH', 'NHCM', 'DKC']
const LearnEffect = () => {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [tabData, setTabData] = useState([])
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [countdown, setCountdown] = useState(2309)
    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('NTH')

    useEffect(() => {
        console.log('Mounted')
    })

    useEffect(() => {
        document.title = title
    }, [title])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(posts))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => setTabData(data))
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)

        // clean up function
        return () => {
            console.log('unmounting...')
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    useEffect(() => {
        return () => URL.revokeObjectURL(avatar?.preview)
    }, [avatar])

    useEffect(() => {
        const handleName = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`body-${name}`, handleName)
        return () => window.removeEventListener(`body-${name}`, handleName)
    }, [name])

    const handleChangeType = (tab) => {
        setType(tab)
    }

    const handleGoToTop = () => {
        window.scrollTo(0, 0)
    }

    const handleChangeFile = (e) => {
        const file = e.target.files[0]
        if (file) {
            file.preview = URL.createObjectURL(file)
            setAvatar(file)
        }
        e.target.value = ''
        console.log(333)
    }

    const handleChangeName = (name) => {
        setName(name)
    }

    return (
        <>
            <h1>Learn Effect</h1>
            <h3>{countdown}</h3>

            <div>
                {names.map((item) => (
                    <li key={item} style={name === item ? {color: "orange"} : {}} onClick={() => handleChangeName(item)}>{item}</li>
                ))}
            </div>

            <div>
                <input type="file" onChange={handleChangeFile} />
                {avatar && <img alt="anh..." srcSet={avatar.preview} style={{width: 250}} />}
            </div>
            <div>
                <input value={title} onChange={e => setTitle(e.target.value)}/>
                {console.log('re-render')}
            </div>

            <div>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {
                    tabs.map(tab => (
                        <button
                            key={tab}
                            style={type === tab ? {
                                color: '#fff',
                                backgroundColor: '#333'
                            } : {}}
                            onClick={() => handleChangeType(tab)}>{tab}</button>
                    ))
                }
                <div>
                    <ul>
                        {tabData.map((data) => (
                            <li key={data.id}>
                                {data.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {
                showGoToTop && (
                    <button
                        style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                        }}
                        onClick={handleGoToTop}
                    >Go to top</button>
                )
            }
        </>
    )
}

export default memo(LearnEffect)

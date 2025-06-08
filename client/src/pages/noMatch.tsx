import Layout from '../components/layout/IndexLayout';

function noMatch({}) {
    return (
        <Layout navTitle="Такой страницы не существует :с" backTitle='' backTo=''>
            <div className="no-match-wrapper">
                <img className="no-match__icon" src="/static/svg/404.svg" alt="404"></img>
                <h1 className="no-match__title">К сожалению,&nbsp;&nbsp;ничего не удалось найти</h1>
                <a className="no-match__link" href='/menu'>Не расстраивайтесь&nbsp;&nbsp;Может вас что-нибудь заинтересует в нашем меню?</a>
            </div>
        </Layout>
    )
}

export default noMatch
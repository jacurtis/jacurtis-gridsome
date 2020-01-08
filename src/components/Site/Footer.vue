<template>
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-message">Helping you build and grow your next great idea</div>
                <div class="footer-links">
                    <ul>
                        <li><a href="https://youtube.com">YouTube</a></li>
                        <li><a href="https://twitter.com/_jacurtis">Twitter</a></li>
                        <li><a href="https://github.com/jacurtis">Github</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #f2f2f2;
    padding: 60px 10%;

    .footer-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
.footer-links {
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    li {
    float: left;
    }

    li a {
    display: block;
    padding: 16px;
    text-decoration: none;
    }
}
</style>
<template>
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-message">
                    <!-- <h4>Jacurtis</h4> -->
                    <p>Helping you build and grow your next great idea</p>
                </div>
                <div class="footer-links">
                    <ul>
                        <li><a href="https://youtube.com"><jac-icon class="youtube-icon" name="youtube" size="25"></jac-icon></a></li>
                        <li><a href="https://twitter.com/_jacurtis"><jac-icon class="twitter-icon" name="twitter" size="25"></jac-icon></a></li>
                        <li><a href="https://github.com/jacurtis"><jac-icon class="github-icon" name="github" size="25"></jac-icon></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import JacIcon from '~/components/Icon';
export default {
    components: {
        JacIcon,
    }
}
</script>

<style lang="scss" scoped>
footer {
    background-color: #f2f2f2;
    padding: 60px 10%;
    margin-top: 100px;
    font-size: 1.2rem;

    .footer-content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
            font-family: basic-sans, sans-serif;
            font-weight: 700;
        }
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
    display: flex;
    align-items: center;
    padding: 16px;
    text-decoration: none;
    color: #c6cbd1;

        .github-icon:hover {
            color: #24292e;
        }

        .twitter-icon:hover {
            color: rgb(29, 161, 242);
        }

        .youtube-icon:hover {
            color: #FF0000;
        }
    
        svg {
            fill: currentColor;
        }
    }
}
</style>
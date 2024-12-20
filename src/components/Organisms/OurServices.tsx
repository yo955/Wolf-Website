import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Container from "@mui/material/Container";
import { Text } from "@/components";
import Box from "@mui/material/Box";
export function OurServices() {
  const arr = [
    {
      id: "1",
      discription:
        "We create responsive and user-friendly websites not only visually appealing but also optimized for performance and SEO.",
      name: "1.Web App development",
      icon: (
        <svg
          className=""
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="80" height="80" rx="10" fill="#EAEAEA" />
          <g clipPath="url(#clip0_116_8520)">
            <path
              d="M44.2431 53.3567C44.7866 55.1721 45.3123 56.9206 45.8457 58.7026H47.9841V60.0023H32.0209V58.6948C32.5989 58.6948 33.1903 58.6792 33.7795 58.7026C34.0646 58.7138 34.1838 58.6291 34.2651 58.3484C34.744 56.7012 35.2463 55.0607 35.7586 53.3567H22.1186C20.8122 53.3567 19.9891 52.5336 19.9891 51.2261V22.1274C19.9891 20.8221 20.8133 20.0012 22.1208 20.0001H57.8842C59.1906 20.0001 60.0103 20.8232 60.0103 22.1329C60.0103 31.8329 60.0103 41.5324 60.0103 51.2316C60.0103 52.5369 59.1872 53.3567 57.8764 53.3567H44.2431ZM58.6783 48.0107V47.5919C58.6783 39.1565 58.6783 30.7206 58.6783 22.2844C58.6783 21.5449 58.4555 21.3344 57.6971 21.3344H22.3057C21.5261 21.3344 21.3234 21.5415 21.3234 22.3245V48.0062L58.6783 48.0107ZM58.6783 49.3884H21.3245V50.9554C21.3245 51.8464 21.5005 52.028 22.3915 52.028H57.6135C57.7383 52.028 57.8641 52.0358 57.9889 52.028C58.4009 51.9923 58.6571 51.7473 58.6738 51.3319C58.6894 50.687 58.676 50.0488 58.676 49.3839L58.6783 49.3884ZM42.8297 53.3622C41.001 53.3622 39.2112 53.3622 37.4203 53.3555C37.1686 53.3555 37.1307 53.497 37.0784 53.6752C36.7688 54.7228 36.4565 55.7705 36.1417 56.8182C35.958 57.4352 35.7708 58.0511 35.5849 58.6748H44.4246C43.8878 56.8906 43.3621 55.1431 42.8275 53.3578L42.8297 53.3622Z"
              fill="#121212"
            />
            <path
              d="M45.3447 46.6867H35.4647C34.1561 46.6867 33.3308 45.8647 33.3308 44.5605C33.3308 39.9742 33.3308 35.3878 33.3308 30.8014C33.3308 29.4961 34.155 28.6753 35.4647 28.6753C37.8827 28.6753 40.3006 28.6753 42.7185 28.6753C43.0036 28.6672 43.2872 28.7185 43.5514 28.8259C43.8156 28.9332 44.0546 29.0943 44.2533 29.299C44.8101 29.8558 45.3815 30.4127 45.9239 30.9829C46.0367 31.1052 46.1749 31.2012 46.3289 31.2643C46.4828 31.3274 46.6487 31.3561 46.8149 31.3482C49.6226 31.3393 52.4292 31.3482 55.237 31.3482C56.5167 31.3482 57.3442 32.1757 57.3453 33.4577C57.3453 37.1701 57.3453 40.8826 57.3453 44.5951C57.3453 45.8681 56.51 46.6956 55.2292 46.6956L45.3447 46.6867ZM45.2935 45.3502H55.0465C55.795 45.3502 56.0099 45.1274 56.0099 44.3812V33.6715C56.0099 32.8919 55.8039 32.6769 55.0309 32.6769C52.2388 32.6769 49.4466 32.6702 46.6545 32.6769C46.3556 32.6843 46.0585 32.6286 45.7825 32.5134C45.5066 32.3983 45.258 32.2263 45.0529 32.0087C44.5172 31.4641 43.9637 30.9373 43.438 30.3826C43.3165 30.2508 43.1673 30.1475 43.0011 30.0803C42.8349 30.0131 42.6558 29.9836 42.4769 29.9939C40.1992 30.0051 37.9205 29.9939 35.6418 29.9995C34.8689 29.9995 34.664 30.2078 34.664 30.9941C34.664 35.4401 34.664 39.8862 34.664 44.3322C34.664 45.143 34.8633 45.3446 35.6663 45.3446L45.2935 45.3502Z"
              fill="#121212"
            />
            <path
              d="M43.8073 26.8086L42.8528 27.8388C42.5009 27.4701 42.1567 27.1282 41.8348 26.7662C41.6555 26.5635 41.5007 26.509 41.2345 26.6304C40.6287 26.9043 39.9972 27.1182 39.3879 27.3833C39.271 27.439 39.1426 27.4666 39.0131 27.4641C38.8836 27.4616 38.7564 27.429 38.6417 27.3688C38.1005 27.12 37.5503 26.8917 36.9912 26.6838C36.8686 26.6428 36.7574 26.5737 36.6663 26.4821C36.5752 26.3904 36.5068 26.2787 36.4666 26.1559C36.2182 25.5244 35.9253 24.9108 35.6714 24.2804C35.5856 24.0677 35.4787 23.9863 35.2459 23.9986C34.7615 24.0231 34.1734 23.8538 33.8192 24.0732C33.4851 24.277 33.3481 24.8662 33.2245 25.3128C32.9639 26.2528 32.3536 26.725 31.4614 27.0803C30.6462 27.4044 29.9323 27.5525 29.1671 27.0703C29.1316 27.05 29.0943 27.0328 29.0558 27.0191C28.617 26.8587 28.1135 26.4867 27.7538 26.5947C27.3183 26.725 26.9954 27.2518 26.6479 27.6294C26.6104 27.686 26.5861 27.7504 26.5769 27.8177C26.5676 27.8849 26.5736 27.9534 26.5944 28.0181C26.8416 28.6797 27.1301 29.3256 27.374 29.9905C27.443 30.1916 27.4453 30.4095 27.3807 30.612C27.158 31.2234 26.9074 31.826 26.6334 32.4163C26.544 32.5945 26.399 32.7388 26.2202 32.8272C25.4918 33.1613 24.7489 33.4687 23.9927 33.7928C23.9927 34.313 23.976 34.8275 24.0049 35.3387C24.0212 35.4104 24.0533 35.4776 24.0987 35.5354C24.1442 35.5932 24.2019 35.6401 24.2678 35.6728C24.9093 35.9691 25.5698 36.2241 26.2068 36.5271C26.3962 36.6248 26.5489 36.781 26.6423 36.9726C26.9174 37.5617 27.1635 38.1665 27.3907 38.7768C27.4503 38.9531 27.4503 39.1441 27.3907 39.3203C27.149 39.9886 26.884 40.6401 26.6044 41.2883C26.5064 41.5111 26.5365 41.6603 26.7158 41.824C27.0767 42.1481 27.3774 42.6905 27.7783 42.774C28.1792 42.8576 28.6971 42.5357 29.1148 42.3029C29.9234 41.8496 30.6885 41.8251 31.4815 42.3207C31.7098 42.4644 31.9816 42.5435 32.2611 42.6549C32.0862 43.0748 31.927 43.4657 31.7466 43.89C31.33 43.7218 30.9547 43.5492 30.5649 43.4234C30.3879 43.366 30.1973 43.366 30.0203 43.4234C29.2551 43.7074 28.4978 44.0147 27.7427 44.3288C27.5199 44.4202 27.3796 44.4079 27.2036 44.2252C26.5183 43.5162 25.8207 42.8186 25.1109 42.1325C25.0356 42.0751 24.9838 41.9922 24.9651 41.8994C24.9465 41.8065 24.9623 41.7101 25.0095 41.628C25.3036 40.9252 25.5664 40.208 25.8705 39.5119C26.0097 39.1945 25.9818 38.9339 25.8772 38.6075C25.6622 37.9159 25.2612 37.4938 24.5629 37.271C23.9972 37.0951 23.4659 36.8088 22.9124 36.5872C22.8279 36.5635 22.755 36.5098 22.7072 36.4362C22.6594 36.3626 22.6401 36.2742 22.6529 36.1874C22.6651 35.185 22.6674 34.1826 22.6529 33.1803C22.6529 32.9442 22.7342 32.8462 22.9424 32.7582C23.6619 32.4653 24.3669 32.1389 25.0875 31.8527C25.3682 31.7413 25.5096 31.5576 25.6522 31.2958C26.0264 30.6276 26.0286 29.9894 25.6667 29.3056C25.4094 28.8189 25.2546 28.2776 25.0318 27.7708C24.9305 27.5392 24.936 27.3866 25.1332 27.1961C25.8348 26.5279 26.5198 25.8318 27.198 25.1346C27.3673 24.9609 27.5065 24.9197 27.7349 25.0166C28.461 25.3273 29.1905 25.6325 29.9334 25.8953C30.1765 25.9597 30.4321 25.9597 30.6751 25.8953C31.4269 25.736 31.8724 25.266 32.0952 24.5187C32.2611 23.9618 32.5273 23.4384 32.7779 22.9138C32.8154 22.8502 32.8669 22.7959 32.9284 22.755C32.99 22.7141 33.06 22.6877 33.1332 22.6777C34.1467 22.6588 35.1613 22.6777 36.1759 22.6621C36.2629 22.6503 36.3513 22.6704 36.4246 22.7188C36.4979 22.7671 36.5512 22.8403 36.5746 22.925C36.8787 23.6689 37.1838 24.414 37.528 25.1391C37.6215 25.3384 37.8332 25.5021 38.0258 25.6302C38.6941 26.0757 39.3746 26.0323 40.0829 25.657C40.5935 25.4075 41.1208 25.1939 41.6611 25.0177C41.7259 24.9976 41.7944 24.9924 41.8615 25.0025C41.9286 25.0125 41.9925 25.0375 42.0487 25.0756C42.6523 25.6503 43.2381 26.2417 43.8073 26.8086Z"
              fill="#121212"
            />
            <path
              d="M31.7209 40.6292C29.8186 39.9709 28.0901 37.3347 27.9887 35.0916C27.8395 31.8094 29.9032 29.5096 31.7097 28.7233L32.2978 29.8827C30.4189 30.9352 29.3497 32.5189 29.3453 34.6718C29.3408 36.8246 30.3978 38.415 32.2945 39.4798L31.7209 40.6292Z"
              fill="#121212"
            />
            <path
              d="M38.9165 38.6541L41.8022 41.5209L40.8778 42.3384L37.1913 38.6474L40.9223 34.9342L41.7676 35.8152L38.9165 38.6541Z"
              fill="#121212"
            />
            <path
              d="M51.7533 38.7117C50.751 37.7093 49.821 36.7849 48.871 35.8393L49.8299 34.9684L53.5231 38.6627L49.7519 42.4193L48.9155 41.5395L51.7533 38.7117Z"
              fill="#121212"
            />
            <path
              d="M46.7591 35.6886L47.9407 36.3468L44.5995 42.361L43.4178 41.7028L46.7591 35.6886Z"
              fill="#121212"
            />
          </g>
          <defs>
            <clipPath id="clip0_116_8520">
              <rect
                width="40.0223"
                height="40"
                fill=""
                transform="translate(19.9889 20)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: "2",
      discription:
        "Our mobile app development services cover both Android and iOS platforms and ensure seamless user experiences.",
      name: "2.Mobile App development",
      icon: (
        <svg
          className="svg-icon"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="80" height="80" rx="10" fill="#EAEAEA" />
          <g clipPath="url(#clip0_116_8536)">
            <path
              d="M40.0283 20.0006C42.4452 20.0006 44.8616 20.0006 47.2777 20.0006C49.2212 20.0006 50.6679 21.4485 50.669 23.3864C50.669 27.4419 50.6668 31.4966 50.6623 35.5506C50.6623 35.8914 50.7069 36.0251 51.0978 36.0106C52.1826 35.9716 52.3853 35.8447 52.588 37.2302C52.6827 37.8683 52.9221 38.2503 53.5904 38.4865C54.0904 38.6647 54.4379 38.7092 54.8422 38.3684C55.0839 38.1824 55.3397 38.0156 55.6074 37.8694C55.9281 37.6757 56.24 37.6879 56.515 37.9597C57.0281 38.4675 57.539 38.978 58.0476 39.4911C58.3215 39.7684 58.326 40.0825 58.13 40.401C57.8905 40.7897 57.6377 41.1706 57.3938 41.557C57.3437 41.6361 57.2501 41.7464 57.2735 41.8054C57.455 42.2665 57.6566 42.7209 57.8671 43.1697C57.8905 43.221 58.0119 43.2321 58.0899 43.251C58.5465 43.3624 59.0054 43.4604 59.462 43.5685C59.6219 43.5925 59.7668 43.6763 59.8673 43.8031C59.9678 43.9298 60.0164 44.09 60.0033 44.2512C60.0033 44.9729 60.0033 45.695 60.0033 46.4174C60.016 46.5717 59.9713 46.7252 59.8778 46.8485C59.7842 46.9718 59.6485 47.0563 59.4965 47.0857C59.0421 47.2037 58.5866 47.3229 58.1244 47.4008C57.9095 47.4376 57.8036 47.5256 57.7513 47.7194C57.7335 47.8296 57.6957 47.9356 57.6399 48.0323C57.1733 48.6727 57.327 49.2374 57.8181 49.7809C57.9281 49.9231 58.0264 50.0739 58.1122 50.232C58.3349 50.585 58.3071 50.9002 58.0008 51.2043C57.5185 51.6843 57.0452 52.1732 56.5618 52.6521C56.2188 52.9862 55.9671 53.0141 55.5595 52.7635C55.477 52.7134 55.3969 52.6599 55.3156 52.6065C54.1762 51.8703 54.1773 51.8714 52.9656 52.4383C52.9036 52.4657 52.8502 52.5094 52.811 52.5647C52.7718 52.62 52.7482 52.6848 52.7428 52.7524C52.6671 53.1734 52.5769 53.5921 52.4833 54.0098C52.3719 54.4954 52.0378 54.746 51.6291 54.6546C51.2504 54.5711 51.0622 54.2091 51.1568 53.7414C51.2771 53.1455 51.4063 52.5519 51.5244 51.9594C51.5957 51.5985 51.7906 51.358 52.1536 51.2711C52.7336 51.1338 53.2881 50.9052 53.7964 50.5939C53.9336 50.499 54.0977 50.4505 54.2645 50.4557C54.4313 50.4609 54.592 50.5195 54.723 50.6229C54.9725 50.7978 55.2287 50.9648 55.4937 51.1141C55.643 51.1987 55.7967 51.4359 55.9526 51.3212C56.2209 51.105 56.4628 50.8579 56.6732 50.585C56.74 50.5071 56.6142 50.4124 56.5618 50.3344C56.3558 50.0059 56.1431 49.6818 55.9292 49.3588C55.8361 49.237 55.7835 49.0892 55.7787 48.936C55.7739 48.7828 55.8172 48.6319 55.9025 48.5046C56.2234 47.9721 56.4633 47.3948 56.6142 46.7916C56.6423 46.6475 56.7143 46.5156 56.8204 46.4141C56.9265 46.3126 57.0615 46.2464 57.2067 46.2247C57.5998 46.1468 57.9863 46.0332 58.3806 45.9697C58.6245 45.9296 58.6746 45.8216 58.6735 45.5899C58.6668 44.7646 58.6735 44.7646 57.8571 44.5875C57.8434 44.5864 57.8296 44.5864 57.8159 44.5875C57.0753 44.5296 56.5908 44.2267 56.466 43.4114C56.4003 42.9659 56.1464 42.5616 55.9092 42.1741C55.8228 42.0473 55.7785 41.8965 55.7827 41.7432C55.7869 41.5898 55.8393 41.4417 55.9326 41.3198C56.1386 41.008 56.3179 40.6761 56.5451 40.382C56.7255 40.1482 56.6665 40.0134 56.4772 39.8252C55.9203 39.2828 55.8947 39.2327 55.2933 39.696C54.6384 40.2005 54.0392 40.3642 53.3186 39.8352C52.9845 39.5924 52.568 39.4955 52.1637 39.3975C52.0055 39.3688 51.8604 39.2907 51.7494 39.1745C51.6383 39.0582 51.567 38.9098 51.5455 38.7504C51.4787 38.3829 51.3729 38.022 51.3228 37.6534C51.2805 37.3193 51.0845 37.3193 50.8361 37.3337C50.5287 37.3527 50.6768 37.5843 50.6757 37.708C50.6623 38.8217 50.6757 39.9354 50.6623 41.0414C50.6623 41.2719 50.7203 41.3332 50.9564 41.3443C52.5925 41.4267 54.0381 42.6017 54.5059 44.2044C54.7403 44.9934 54.7257 45.8355 54.4643 46.616C54.2028 47.3964 53.7071 48.0773 53.0446 48.5658C52.6426 48.8587 52.2227 48.8331 51.9788 48.5012C51.7349 48.1693 51.8106 47.8252 52.2015 47.4989C53.6706 46.2838 53.6962 44.3258 52.2572 43.2154C51.853 42.9206 51.3789 42.7363 50.8818 42.6808C50.7303 42.6585 50.6412 42.6808 50.659 42.8657C50.6646 42.9625 50.6646 43.0596 50.659 43.1564C50.659 47.6277 50.659 52.0993 50.659 56.5714C50.659 58.5694 49.2256 60.0017 47.2265 60.0017H32.7389C30.7754 60.0017 29.3364 58.5538 29.3364 56.5847C29.3364 52.53 29.339 48.4752 29.3442 44.4205C29.3442 44.0741 29.2663 43.9839 28.9188 43.9939C27.8162 44.0262 27.6213 44.1498 27.4186 42.7822C27.3228 42.1295 27.0711 41.7286 26.3872 41.5014C25.9028 41.3399 25.5642 41.2964 25.1722 41.6294C24.9212 41.8256 24.6532 41.9989 24.3714 42.1473C24.0618 42.3266 23.7599 42.3077 23.4982 42.0493C22.9837 41.5415 22.4747 41.0302 21.9646 40.5179C21.6906 40.2428 21.6806 39.9354 21.8688 39.6102C21.9245 39.5144 21.9913 39.4253 22.0492 39.3318C22.282 38.9565 22.6818 38.5867 22.6985 38.2013C22.7152 37.816 22.3566 37.4106 22.2285 36.9851C22.2094 36.9191 22.1704 36.8605 22.1168 36.8175C22.0632 36.7744 21.9976 36.749 21.9289 36.7446C21.4834 36.6599 21.0379 36.553 20.5925 36.4517C20.1826 36.3581 19.9899 36.1086 19.9988 35.6787C20.0122 34.9982 20.0089 34.3177 19.9988 33.6372C19.9933 33.2274 20.1793 32.9846 20.5746 32.8955C21.0201 32.7941 21.4656 32.6906 21.9111 32.5937C22.0225 32.5703 22.1339 32.577 22.1851 32.4455C22.3344 32.0151 22.5138 31.5957 22.7219 31.1903C22.7899 31.0634 22.6685 30.9876 22.6106 30.9008C22.3878 30.5366 22.1461 30.1791 21.9189 29.8149C21.6483 29.3816 21.6694 29.1322 22.0158 28.7791C22.4914 28.2935 22.9781 27.8168 23.4537 27.3312C23.7532 27.025 24.0729 27.0038 24.4248 27.2265L24.671 27.3813C25.0463 27.6152 25.4138 28.0162 25.8003 28.034C26.1868 28.0518 26.5899 27.691 27.0154 27.5629C27.0818 27.5436 27.1406 27.5043 27.1837 27.4502C27.2268 27.3962 27.252 27.3301 27.256 27.2611C27.3306 26.839 27.4219 26.4213 27.5132 26.0025C27.6246 25.5114 27.9465 25.2608 28.3586 25.3432C28.7517 25.4223 28.9388 25.7887 28.8386 26.2865C28.7216 26.869 28.5936 27.4493 28.48 28.0329C28.4053 28.4104 28.2004 28.6521 27.8184 28.7423C27.253 28.8781 26.713 29.1037 26.2191 29.4106C25.885 29.6177 25.5776 29.5988 25.2568 29.3738C24.936 29.1489 24.6231 28.9773 24.3168 28.7624C24.1486 28.6443 24.0451 28.6577 23.8947 28.8025C23.2654 29.4039 23.2599 29.3972 23.7232 30.1178C23.7293 30.1301 23.7368 30.1417 23.7455 30.1523C24.2622 30.7315 24.3446 31.3106 23.8568 31.9744C23.6163 32.3007 23.5027 32.7217 23.4113 33.1283C23.32 33.5348 23.0772 33.7453 22.6852 33.8243C22.2931 33.9034 21.9323 34.0059 21.5514 34.0683C21.3765 34.0972 21.3353 34.1551 21.3286 34.3266C21.2841 35.2332 21.2785 35.2332 22.1729 35.4214C22.3355 35.4549 22.4981 35.4905 22.6607 35.5183C22.8481 35.5367 23.0242 35.6168 23.1612 35.746C23.2983 35.8752 23.3886 36.0462 23.418 36.2322C23.5289 36.7465 23.7307 37.2368 24.0139 37.6801C24.2901 38.1033 24.2611 38.4686 23.9649 38.8585C23.7655 39.1224 23.6129 39.422 23.4191 39.6915C23.2977 39.8619 23.3211 39.9644 23.4626 40.1136C24.0562 40.7362 24.074 40.7741 24.7734 40.2662C25.396 39.8152 25.9573 39.6358 26.639 40.1548C26.9619 40.3988 27.3863 40.509 27.7928 40.6003C28.1993 40.6917 28.4053 40.9345 28.4822 41.3321C28.559 41.7297 28.6626 42.0861 28.7172 42.4681C28.7651 42.7922 28.9934 42.6519 29.156 42.6752C29.3999 42.7098 29.3309 42.5193 29.3309 42.399C29.3309 41.2597 29.3309 40.1214 29.3375 38.9821C29.3375 38.766 29.3052 38.6814 29.0547 38.668C27.3751 38.5778 25.9451 37.3972 25.474 35.7377C25.2575 34.9514 25.2856 34.1178 25.5546 33.3478C25.8236 32.5778 26.3207 31.908 26.9798 31.4276C27.2504 31.2349 27.5288 31.1558 27.8295 31.3273C28.2684 31.5768 28.2873 32.1292 27.8485 32.4678C27.2415 32.9367 26.8461 33.5147 26.7125 34.2832C26.4552 35.7422 27.6435 37.2535 29.1259 37.3371C29.2963 37.346 29.3487 37.2981 29.3353 37.1366C29.3303 37.0394 29.3303 36.942 29.3353 36.8448C29.3353 32.3735 29.3353 27.9022 29.3353 23.4309C29.3353 21.4574 30.772 20.014 32.7356 20.0128C35.168 20.0024 37.5989 19.9984 40.0283 20.0006ZM30.6729 39.9945V56.3665C30.6729 57.8511 31.477 58.6619 32.9494 58.663H47.075C48.5228 58.663 49.3392 57.8455 49.3392 56.3954C49.3392 45.4652 49.3392 34.5357 49.3392 23.6069C49.3392 22.1512 48.5273 21.3326 47.0828 21.3315H32.955C31.477 21.3315 30.6696 22.1401 30.6696 23.6191L30.6729 39.9945Z"
              fill="#121212"
            />
            <path
              d="M25.3342 48.604C25.3342 48.1752 25.6004 47.8612 25.9824 47.8467C26.1633 47.8458 26.3371 47.9167 26.4658 48.0439C26.5944 48.1711 26.6673 48.3441 26.6685 48.525C26.6744 48.6176 26.6616 48.7105 26.631 48.7981C26.6004 48.8857 26.5525 48.9664 26.4902 49.0352C26.4279 49.104 26.3525 49.1597 26.2683 49.1989C26.1842 49.238 26.093 49.26 26.0002 49.2634C25.5804 49.2734 25.3409 49.0351 25.3342 48.604Z"
              fill="#121212"
            />
            <path
              d="M25.3343 51.2793C25.3287 50.8338 25.6194 50.4997 26.0148 50.5131C26.1882 50.5209 26.3521 50.5943 26.4734 50.7183C26.5948 50.8424 26.6645 51.0078 26.6686 51.1813C26.6755 51.2741 26.6639 51.3672 26.6343 51.4554C26.6048 51.5436 26.558 51.6249 26.4965 51.6948C26.4351 51.7646 26.3604 51.8214 26.2767 51.862C26.193 51.9025 26.1021 51.9259 26.0092 51.9309C25.5882 51.9442 25.341 51.7081 25.3343 51.2793Z"
              fill="#121212"
            />
            <path
              d="M25.9983 53.1812C26.1786 53.185 26.3501 53.2599 26.4753 53.3897C26.6005 53.5195 26.6692 53.6936 26.6666 53.8739C26.6701 53.9668 26.6551 54.0594 26.6224 54.1463C26.5896 54.2333 26.5398 54.3128 26.4759 54.3803C26.412 54.4477 26.3353 54.5017 26.2502 54.5391C26.1651 54.5764 26.0734 54.5964 25.9805 54.5978C25.5651 54.5978 25.3301 54.3562 25.3312 53.9229C25.3323 53.4897 25.6163 53.1834 25.9983 53.1812Z"
              fill="#121212"
            />
            <path
              d="M53.3353 26.0845C53.3353 25.639 53.5748 25.3472 53.9735 25.3338C54.0625 25.3272 54.1519 25.3391 54.2362 25.3686C54.3204 25.3981 54.3977 25.4447 54.4631 25.5054C54.5285 25.5661 54.5807 25.6397 54.6165 25.7215C54.6522 25.8033 54.6706 25.8916 54.6707 25.9809C54.6796 26.3751 54.3744 26.726 54.0103 26.7427C53.6193 26.7605 53.3409 26.4899 53.3353 26.0845Z"
              fill="#121212"
            />
            <path
              d="M53.3353 28.7505C53.3353 28.305 53.5748 28.0143 53.9735 27.9998C54.0631 27.9932 54.1531 28.0052 54.2378 28.0351C54.3225 28.0651 54.4 28.1123 54.4656 28.1737C54.5311 28.2352 54.5832 28.3095 54.6185 28.3921C54.6538 28.4747 54.6716 28.5638 54.6707 28.6536C54.6796 29.0467 54.3744 29.3987 54.0103 29.4143C53.6193 29.4332 53.3409 29.1559 53.3353 28.7505Z"
              fill="#121212"
            />
            <path
              d="M53.9823 30.6653C54.0718 30.6597 54.1614 30.6728 54.2456 30.7037C54.3298 30.7345 54.4066 30.7825 54.4713 30.8446C54.536 30.9066 54.5871 30.9814 54.6214 31.0643C54.6557 31.1471 54.6725 31.2361 54.6706 31.3258C54.6706 31.7189 54.3665 32.0664 54.0023 32.0786C53.9163 32.0845 53.8299 32.0725 53.7487 32.0434C53.6675 32.0142 53.5932 31.9687 53.5305 31.9095C53.4677 31.8503 53.4179 31.7788 53.3841 31.6994C53.3503 31.62 53.3333 31.5345 53.3341 31.4483C53.3196 30.9772 53.568 30.6753 53.9823 30.6653Z"
              fill="#121212"
            />
            <path
              d="M36.6063 36.6614C36.9661 36.6614 37.1754 36.8062 37.2868 37.0735C37.3445 37.2012 37.3598 37.344 37.3306 37.481C37.3013 37.6181 37.229 37.7422 37.1242 37.8353C36.4972 38.4656 35.8802 39.1049 35.2308 39.7141C34.9869 39.9447 35.0081 40.0694 35.2375 40.2877C35.8523 40.8702 36.4426 41.4783 37.0396 42.0797C37.4015 42.4439 37.4372 42.8404 37.1509 43.1367C36.8647 43.4329 36.4537 43.4028 36.0929 43.0442C35.265 42.2223 34.4397 41.3974 33.617 40.5695C33.215 40.163 33.2172 39.8311 33.6226 39.4223C34.4445 38.5948 35.2721 37.7729 36.0962 36.9476C36.2566 36.7828 36.4237 36.6458 36.6063 36.6614Z"
              fill="#121212"
            />
            <path
              d="M43.4005 36.6631C43.5754 36.6542 43.7346 36.7744 43.8883 36.927C44.7303 37.7712 45.5767 38.6099 46.4143 39.4574C46.784 39.8317 46.784 40.1669 46.4143 40.5411C45.5767 41.389 44.734 42.2321 43.8861 43.0704C43.5464 43.4045 43.1477 43.4279 42.8603 43.1428C42.573 42.8577 42.593 42.459 42.9283 42.1193C43.5609 41.4778 44.1946 40.8374 44.8406 40.2103C45.0099 40.0466 45.0132 39.9553 44.8406 39.7893C44.1846 39.1523 43.5442 38.4985 42.8971 37.8525C42.6743 37.6298 42.5919 37.3636 42.7233 37.0618C42.8425 36.7934 43.0552 36.6642 43.4005 36.6631Z"
              fill="#121212"
            />
            <path
              d="M38.6637 42.558C38.8196 41.9388 38.9978 41.2449 39.1682 40.5533C39.4444 39.4563 39.7151 38.3592 39.9968 37.2644C40.1182 36.7944 40.4423 36.5806 40.8399 36.6786C41.203 36.7677 41.4202 37.1453 41.3155 37.5696C40.8834 39.31 40.4449 41.0485 40.0002 42.7852C39.8888 43.2085 39.5859 43.4145 39.205 43.331C38.8497 43.243 38.667 43.0091 38.6637 42.558Z"
              fill="#121212"
            />
            <path
              d="M40.0039 22.6675C40.6421 22.6675 41.2814 22.6675 41.9195 22.6675C42.384 22.6675 42.6591 22.9114 42.6691 23.3124C42.6802 23.7356 42.3996 23.9973 41.9184 23.9984C40.6406 23.9984 39.3631 23.9984 38.086 23.9984C37.6216 23.9984 37.3465 23.7545 37.3365 23.3525C37.3254 22.9292 37.6049 22.6697 38.0872 22.6675C38.7253 22.6642 39.3646 22.6675 40.0039 22.6675Z"
              fill="#121212"
            />
          </g>
          <defs>
            <clipPath id="clip0_116_8536">
              <rect
                width="40.0056"
                height="40"
                fill="white"
                transform="translate(19.9973 20)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: "3",
      discription:
        "Our roots in UX/UI design mean we excel at creating user-centric designs. We focus on delivering intuitive interfaces",
      name: "3.UX/UI design",
      icon: (
        <svg
          className="svg-icon"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="80" height="80" rx="10" fill="#E5E5E5" />
          <rect width="80" height="80" rx="10" fill="#121212" />
          <g clipPath="url(#clip0_116_8556)">
            <path
              d="M35.8613 53.5677H35.0031C28.5835 53.5677 22.1628 53.5677 15.741 53.5677C13.0357 53.5677 11.1333 51.6585 11.1333 48.9499C11.1333 38.5132 11.1333 28.0748 11.1333 17.6347C11.1333 14.9009 12.977 13.0387 15.7209 13.0035H64.0321C66.3435 13.0035 67.9945 14.0863 68.6281 16.0524C68.7689 16.4856 68.8424 16.9378 68.846 17.3933C68.8571 27.9787 68.8571 38.5635 68.846 49.1477C68.8469 49.7292 68.7326 50.3051 68.5097 50.8422C68.2868 51.3793 67.9598 51.8669 67.5474 52.2769C67.1351 52.6869 66.6456 53.0112 66.1073 53.231C65.5689 53.4508 64.9924 53.5618 64.4109 53.5576C57.9299 53.5654 51.4488 53.5654 44.9677 53.5576H44.1733C44.1582 53.7688 44.1347 53.9481 44.1347 54.1292C44.1347 55.5505 44.1548 56.9786 44.1213 58.3949C44.1096 58.8626 44.2722 59.0352 44.7063 59.1643C48.3804 60.2521 52.0477 61.3684 55.7185 62.4763C55.9202 62.5277 56.1188 62.5904 56.3135 62.664C56.8163 62.8752 56.9739 63.3127 56.6487 63.72C55.8107 64.7592 54.9508 65.7917 54.0306 66.7605C53.8462 66.9566 53.325 66.9751 53.0115 66.8845C50.0665 66.0465 47.1367 65.1447 44.195 64.2899C43.6692 64.1668 43.1346 64.085 42.596 64.0452C42.3873 64.0326 42.1779 64.0326 41.9692 64.0452C36.453 64.0452 36.4547 64.0452 31.1782 65.6677C29.7853 66.0951 28.3791 66.484 26.9879 66.9198C26.4582 67.0874 26.0844 66.9918 25.7291 66.5493C25.0218 65.6693 24.2641 64.8296 23.5384 63.9647C22.9685 63.2825 23.0992 62.8501 23.9373 62.597C27.6667 61.4673 31.3927 60.3242 35.1322 59.228C35.7323 59.0604 35.8965 58.7905 35.8798 58.1938C35.8412 56.6786 35.8613 55.1566 35.8613 53.5677ZM40.0014 52.205H64.1578C66.263 52.205 67.5101 50.968 67.5101 48.8527C67.5101 38.4774 67.49 28.1005 67.5336 17.7252C67.5419 15.9167 66.2815 14.326 64.1243 14.3294C48.0412 14.3562 31.9582 14.3562 15.8751 14.3294C13.7347 14.3294 12.4658 15.9083 12.4742 17.7336C12.5189 28.0876 12.5189 38.4422 12.4742 48.7974C12.4642 50.8708 14.0397 52.2435 15.9153 52.2284C23.9406 52.1698 31.971 52.2083 40.0014 52.2083V52.205ZM42.7452 53.6045H37.2609V62.6657H42.7452V53.6045ZM44.1381 60.3996C44.1381 61.1773 44.1129 61.8645 44.1565 62.5467C44.1828 62.6441 44.2318 62.7338 44.2993 62.8087C44.3669 62.8835 44.4512 62.9414 44.5454 62.9775C47.3322 63.8256 50.1258 64.6586 52.926 65.4766C53.0803 65.5218 53.3401 65.5168 53.4289 65.4213C53.9435 64.8682 54.4228 64.2815 54.9491 63.6647L44.1381 60.3996ZM25.0603 63.663C25.5632 64.2631 26.0073 64.8179 26.4934 65.3308C26.5747 65.3969 26.6696 65.4441 26.7714 65.469C26.8731 65.4939 26.9791 65.496 27.0817 65.4749C29.8987 64.6559 32.7107 63.8178 35.5177 62.9607C35.5985 62.9317 35.6712 62.8837 35.7296 62.8207C35.7879 62.7577 35.8302 62.6815 35.8529 62.5987C35.8848 61.8964 35.868 61.1924 35.868 60.4029L25.0603 63.663Z"
              fill="white"
            />
            <path
              d="M40.0011 50.425H16.0324C14.6781 50.425 14.2725 50.0211 14.2725 48.6701V17.8594C14.2725 16.5437 14.6664 16.1498 15.9972 16.1498H64C65.3409 16.1498 65.7281 16.542 65.7281 17.8561V48.7288C65.7281 49.9926 65.2974 50.425 64.0352 50.425H40.0011ZM15.6704 49.0204H64.3252V17.5343H15.6704V49.0204Z"
              fill="white"
            />
            <path
              d="M44.6154 31.6685C44.6154 30.6025 44.6154 29.5348 44.6154 28.4688C44.6154 27.9978 44.736 27.6056 45.2858 27.6072C45.8356 27.6089 45.9563 28.0145 45.9563 28.4755C45.9563 30.4416 45.9445 32.4077 45.9563 34.3738C45.9714 35.9561 46.8647 37.1562 48.2425 37.5115C50.2539 38.0278 52.1177 36.5846 52.1529 34.4308C52.1848 32.4647 52.1663 30.4986 52.1529 28.5325C52.1529 28.0414 52.2351 27.6089 52.8234 27.6089C53.4117 27.6089 53.519 28.0497 53.5123 28.5308C53.4855 30.7668 53.5693 33.0128 53.3899 35.2353C53.2223 37.4143 51.0936 39.0687 48.9197 38.9815C46.6066 38.8893 44.7293 37.0707 44.6304 34.8046C44.5885 33.7603 44.6304 32.7127 44.6304 31.6668L44.6154 31.6685Z"
              fill="white"
            />
            <path
              d="M27.205 31.6877C27.205 32.628 27.205 33.5683 27.205 34.5069C27.2104 35.6793 26.7535 36.8066 25.9333 37.6444C25.1131 38.4821 23.9958 38.9628 22.8235 38.9822C21.6713 38.9922 20.5599 38.5557 19.7224 37.7641C18.885 36.9726 18.3865 35.8876 18.3315 34.7366C18.2527 32.6297 18.3097 30.5161 18.3097 28.4058C18.3097 27.9533 18.4991 27.603 18.9902 27.6046C19.5182 27.6046 19.6741 27.9751 19.6724 28.4578C19.6724 30.4859 19.659 32.5124 19.6724 34.5388C19.6858 36.1462 20.8708 37.4201 22.4933 37.6162C23.9097 37.7838 25.3528 36.7781 25.745 35.3232C25.8252 34.9573 25.8601 34.583 25.849 34.2086C25.859 32.4118 25.849 30.615 25.849 28.8165C25.8397 28.649 25.8397 28.4811 25.849 28.3136C25.8976 27.8963 26.0887 27.5795 26.5563 27.6013C27.0239 27.6231 27.1983 27.9214 27.1966 28.3622C27.2016 29.4718 27.205 30.5831 27.205 31.6877Z"
              fill="white"
            />
            <path
              d="M32.4517 34.5867C31.6137 35.9477 30.8678 37.2232 30.0616 38.4636C29.9723 38.592 29.8568 38.7001 29.7228 38.7807C29.5887 38.8613 29.4391 38.9126 29.2838 38.9312C28.781 38.9312 28.5832 38.3462 28.8916 37.8333C29.6844 36.5092 30.4739 35.18 31.3103 33.8827C31.6053 33.4268 31.5835 33.0999 31.2969 32.6541C30.484 31.3903 29.7314 30.0896 28.9385 28.8124C28.6704 28.3799 28.5832 27.9743 29.081 27.6877C29.5788 27.4011 29.8537 27.7145 30.0867 28.1084C30.851 29.3672 31.622 30.6226 32.445 31.9635L34.5402 28.5325C34.6592 28.3364 34.7715 28.1352 34.9006 27.9475C35.1302 27.6123 35.4369 27.4597 35.8141 27.676C36.1912 27.8922 36.27 28.266 36.0487 28.6431C35.5308 29.5247 34.9861 30.3896 34.4631 31.2696C34.0608 31.94 33.3736 32.6323 33.3686 33.3178C33.3686 33.9782 34.0726 34.6436 34.4731 35.304C34.9693 36.1253 35.4688 36.945 35.9716 37.7629C36.2214 38.1669 36.2934 38.5658 35.8375 38.8491C35.3816 39.1323 35.0598 38.8625 34.8168 38.4652C34.0558 37.2098 33.2831 35.9477 32.4517 34.5867Z"
              fill="white"
            />
            <path
              d="M57.7751 28.9508C57.2002 28.9508 56.6588 28.9592 56.1191 28.9508C55.6749 28.9424 55.3212 28.7832 55.3179 28.272C55.3145 27.7608 55.6397 27.5931 56.104 27.5931C57.693 27.5931 59.2887 27.6015 60.8709 27.5931C61.347 27.5931 61.6705 27.7993 61.6705 28.2636C61.6705 28.7279 61.3235 28.9458 60.8659 28.9491C60.3279 28.9491 59.7881 28.9491 59.2149 28.9491V37.6315C59.7781 37.6315 60.3161 37.6432 60.8525 37.6315C61.3268 37.6181 61.6587 37.8192 61.6705 38.2902C61.6822 38.7612 61.3352 38.9892 60.8827 38.9909C59.2937 38.9909 57.7053 38.9909 56.1174 38.9909C55.6716 38.9909 55.3196 38.8232 55.3179 38.3103C55.3162 37.7974 55.6431 37.6298 56.1074 37.6399C56.6488 37.6399 57.1901 37.6399 57.7751 37.6399V28.9508Z"
              fill="white"
            />
            <path
              d="M37.0747 41.602C37.182 41.203 37.2708 40.8628 37.363 40.5209C38.743 35.3718 40.1208 30.2227 41.4963 25.0736C41.617 24.6244 41.7981 24.2741 42.3344 24.3428C42.7886 24.4015 42.9579 24.8172 42.7954 25.4306C41.9696 28.5304 41.1427 31.629 40.3147 34.7265C39.7057 36.9993 39.0961 39.2721 38.486 41.545C38.3184 42.1819 37.8021 42.4316 37.3881 42.083C37.2606 41.9389 37.155 41.7769 37.0747 41.602Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_116_8556">
              <rect
                width="57.7244"
                height="54"
                fill="white"
                transform="translate(11.1377 13)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section id="services">
      <Text
        text={
          <div className="pairenttextclients">
            <span className="textList">Our Services</span>
            <span className="textclients">we can help you with</span>{" "}
            <div className="offer">
              <span className="offerday">
                🎉It is our birthday 40% off - 1-day limited offer <span className="spn">click to Learn
                more🎉</span>
              </span>
            </div>
          </div>
        }
        className="textListen"
      />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" }, 
        }}
      >
        {arr.map((e) => (
          <div key={e.id} style={{ marginBottom: 20 }}>
            <Card
              sx={{
                height: "256px",
                border: "none",
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "white",
                cursor: "pointer",
                padding: "16px",
                gap: "16px",
                "&:hover": {
                  background: "linear-gradient(45deg,#F0F0F0, #E0E0E0)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    "&:hover": {
                      color: "#121212",
                    },
                  }}
                >
                  {e.icon}
                </Box>
                <hr style={{ color: "#EAEAEA", margin: "5px" }} />
                <Typography
                  sx={{
                    fontWeight: "400",
                    color: "#121212",
                    lineHeight: "24px",
                    textAlign: "start",
                    paddingBottom: "10px",
                  }}
                >
                  {e.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#494949",
                    lineHeight: "24px",
                    textAlign: "start",
                  }}
                >
                  {e.discription}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Container>
    </section>
  );
}

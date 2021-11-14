import SvgIcon from "@mui/material/SvgIcon";

export const Logo = (props) => {
  return (
    <SvgIcon {...props} viewBox="-4.608 -8.828925 39.936 52.97355">
        <defs>
          <radialGradient
            gradientUnits="userSpaceOnUse"
            cx="173.7628"
            gradientTransform="matrix(.93267 0 0 1.0722 -146.703 -883.4623)"
            fy="856.9146"
            fx="173.7628"
            r="35.1884"
            cy="856.9146"
            id="a"
          >
            <stop stopColor="#FF7854" offset="0%" />
            <stop stopColor="#FD267D" offset="100%" />
          </radialGradient>
        </defs>
        <path
          d="M9.205 14.2587a.097.097 0 01-.108-.03c-1.194-1.581-1.494-4.299-1.567-5.343-.015-.201-.241-.314-.422-.213-3.687 2.071-7.108 6.97-7.108 11.7 0 8.126 5.644 14.943 15.36 14.943 9.103 0 15.36-7.026 15.36-14.942 0-10.358-7.402-17.24-13.995-20.351a.237.237 0 00-.336.246c.849 5.582-.324 11.653-7.184 13.99z"
          fillRule="evenodd"
          fill="white"
        />
    </SvgIcon>
  );
};

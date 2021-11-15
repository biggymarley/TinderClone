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
      />
    </SvgIcon>
  );
};

export const Google = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <g fill="none" fill-rule="nonzero">
        <path
          fill="#4285F4"
          d="M17.6 9.2l-.1-1.8H9v3.4h4.8C13.6 12 13 13 12 13.6v2.2h3a8.8 8.8 0 0 0 2.6-6.6z"
        />
        <path
          fill="#34A853"
          d="M9 18c2.4 0 4.5-.8 6-2.2l-3-2.2a5.4 5.4 0 0 1-8-2.9H1V13a9 9 0 0 0 8 5z"
        />
        <path
          fill="#FBBC05"
          d="M4 10.7a5.4 5.4 0 0 1 0-3.4V5H1a9 9 0 0 0 0 8l3-2.3z"
        />
        <path
          fill="#EA4335"
          d="M9 3.6c1.3 0 2.5.4 3.4 1.3L15 2.3A9 9 0 0 0 1 5l3 2.4a5.4 5.4 0 0 1 5-3.7z"
        />
        <path d="M0 0h18v18H0z" />
      </g>
    </SvgIcon>
  );
};

export const Facebook = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <path
        fill="#298CFA"
        fill-rule="evenodd"
        d="M18 9.053C18 4.053 13.97 0 9 0S0 4.053 0 9.053c0 4.519 3.291 8.264 7.594 8.943V11.67H5.309V9.053h2.285V7.059c0-2.27 1.343-3.523 3.4-3.523.984 0 2.014.177 2.014.177v2.228h-1.135c-1.118 0-1.467.698-1.467 1.414v1.698h2.496l-.399 2.617h-2.097v6.326C14.71 17.317 18 13.572 18 9.053"
      />
    </SvgIcon>
  );
};

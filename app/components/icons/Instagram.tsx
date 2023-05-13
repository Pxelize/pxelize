interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        fill="#fff"
        d="M12 8.209a4.313 4.313 0 100 8.625 4.313 4.313 0 000-8.625zm0 7.5a3.187 3.187 0 110-6.375 3.187 3.187 0 010 6.375zm4.5-12.75h-9A5.068 5.068 0 002.437 8.02v9A5.068 5.068 0 007.5 22.084h9a5.068 5.068 0 005.063-5.063v-9A5.068 5.068 0 0016.5 2.958zm3.938 14.062a3.937 3.937 0 01-3.938 3.938h-9a3.937 3.937 0 01-3.938-3.938v-9A3.938 3.938 0 017.5 4.083h9a3.937 3.937 0 013.938 3.938v9zm-2.625-9.375a.938.938 0 11-1.876 0 .938.938 0 011.876 0z"
      ></path>
    </svg>
  );
}
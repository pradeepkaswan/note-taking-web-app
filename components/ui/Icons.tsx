export function Logo(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={95}
      height={28}
      fill="none"
      viewBox="0 0 95 28"
      {...props}
    >
      <g clipPath="url(#a)">
        <g
          fill="#335CFF"
          fillRule="evenodd"
          clipPath="url(#b)"
          clipRule="evenodd"
        >
          <path d="M27.4 2.158C26.367.192 22.974.81 20.04 1.595 7.291 6.294 2.781 15.842 1.196 21.53a1.051 1.051 0 00-.13.482c-.628 2.413-.713 4.022-.714 4.075a1.048 1.048 0 001.003 1.09c.016.002.031.002.047.002.558 0 1.023-.441 1.048-1.005.007-.171.072-1.346.468-3.101 3.511-.149 7.046-1.456 10.518-3.898a1.05 1.05 0 00.049-1.681l-1.602-1.269 5.256-.515c.214-.02.416-.106.58-.246a79.991 79.991 0 005.333-5.056c3.872-4.06 5.211-6.604 4.348-8.25zM21.178 25.08h-8.974a1.05 1.05 0 000 2.1h8.974a1.05 1.05 0 000-2.1z" />
        </g>
        <path
          fill="#0E121B"
          d="M43.336 23.615c-.567 0-.974-.123-1.219-.368-.245-.26-.368-.744-.368-1.449 0-.475.046-1.05.138-1.725.092-.675.253-1.694.483-3.059l.368-2.231c.215-1.319.406-2.699.575-4.14.153-1.227.23-2.147.23-2.76 0-.69-.253-1.035-.759-1.035-.383 0-.866.207-1.449.621-.567.399-1.18 1.043-1.84 1.932-.215.291-.452.437-.713.437-.215 0-.406-.1-.575-.299a1.2 1.2 0 01-.23-.713c0-.26.046-.506.138-.736.092-.245.26-.537.506-.874.751-1.027 1.587-1.817 2.507-2.369.92-.567 1.886-.851 2.898-.851.843 0 1.472.26 1.886.782.43.521.644 1.28.644 2.277 0 .89-.123 2.177-.368 3.864.767-2.27 1.74-3.987 2.921-5.152 1.18-1.18 2.568-1.771 4.163-1.771 1.257 0 2.2.36 2.829 1.081.644.705.966 1.656.966 2.852 0 .675-.1 1.495-.299 2.461l-1.403 6.578c-.153.767-.23 1.426-.23 1.978 0 .644.146 1.127.437 1.449.307.322.728.483 1.265.483.506 0 .997-.169 1.472-.506.49-.337 1.066-.897 1.725-1.679.184-.215.391-.322.621-.322.2 0 .353.092.46.276.123.184.184.437.184.759 0 .598-.146 1.073-.437 1.426-.797.966-1.587 1.671-2.369 2.116a4.907 4.907 0 01-2.461.667c-1.303 0-2.323-.383-3.059-1.15-.736-.782-1.104-1.825-1.104-3.128 0-.506.038-1.058.115-1.656.092-.598.238-1.357.437-2.277l.92-4.209.161-.736c.077-.353.138-.682.184-.989.046-.322.069-.636.069-.943 0-.49-.138-.882-.414-1.173-.276-.291-.667-.437-1.173-.437-.92 0-1.84.49-2.76 1.472-.92.981-1.771 2.568-2.553 4.761-.782 2.177-1.395 4.968-1.84 8.372-.107.782-.268 1.326-.483 1.633-.2.307-.598.46-1.196.46zm27.365-7.176c.2 0 .353.1.46.299.108.2.161.452.161.759 0 .736-.222 1.173-.667 1.311-.92.322-1.932.506-3.036.552-.291 1.288-.866 2.323-1.725 3.105-.859.767-1.832 1.15-2.92 1.15-.92 0-1.71-.222-2.37-.667a4.268 4.268 0 01-1.472-1.771 5.672 5.672 0 01-.506-2.392c0-1.165.223-2.2.667-3.105.445-.92 1.058-1.633 1.84-2.139a4.585 4.585 0 012.6-.782c1.164 0 2.1.406 2.805 1.219.72.797 1.142 1.786 1.265 2.967.72-.046 1.58-.2 2.576-.46.123-.03.23-.046.322-.046zm-7.544 4.738c.49 0 .913-.2 1.265-.598.368-.399.614-.974.736-1.725a3.265 3.265 0 01-1.104-1.265 3.842 3.842 0 01-.368-1.656c0-.245.023-.49.07-.736h-.116c-.613 0-1.127.299-1.54.897-.4.583-.599 1.41-.599 2.484 0 .843.161 1.487.483 1.932.337.445.728.667 1.173.667zm16.573-2.806c.2 0 .353.092.46.276.123.184.184.437.184.759 0 .613-.146 1.089-.437 1.426a9.782 9.782 0 01-2.162 2.001c-.782.521-1.679.782-2.69.782-3.129 0-4.693-2.2-4.693-6.601 0-.675.023-1.357.07-2.047h-.898c-.46 0-.774-.084-.943-.253-.153-.169-.23-.437-.23-.805 0-.859.345-1.288 1.035-1.288h1.311c.26-1.687.66-3.228 1.196-4.623.537-1.395 1.18-2.507 1.932-3.335.767-.828 1.587-1.242 2.461-1.242.644 0 1.15.284 1.518.851.368.567.552 1.28.552 2.139 0 2.377-.997 4.447-2.99 6.21h2.576c.245 0 .422.054.53.161.106.107.16.307.16.598 0 1.058-.866 1.587-2.599 1.587h-2.806c-.03.767-.046 1.365-.046 1.794 0 1.595.184 2.714.552 3.358.383.644.981.966 1.794.966.66 0 1.242-.2 1.748-.598.506-.399 1.104-.997 1.794-1.794.184-.215.391-.322.621-.322zM75.705 5.629c-.23 0-.49.291-.782.874-.276.567-.544 1.365-.805 2.392a33.648 33.648 0 00-.62 3.381c.904-.782 1.578-1.656 2.023-2.622.46-.981.69-1.87.69-2.668 0-.905-.169-1.357-.506-1.357zM88.3 18.371c.2 0 .353.092.46.276.123.184.184.437.184.759 0 .613-.145 1.089-.437 1.426-.567.69-1.372 1.326-2.415 1.909a6.604 6.604 0 01-3.312.874c-1.61 0-2.86-.437-3.749-1.311-.889-.874-1.334-2.07-1.334-3.588 0-1.058.223-2.04.667-2.944.445-.92 1.058-1.648 1.84-2.185a4.71 4.71 0 012.691-.805c.89 0 1.603.268 2.14.805.536.521.804 1.234.804 2.139 0 1.058-.383 1.97-1.15 2.737-.751.751-2.031 1.35-3.84 1.794.383.705 1.111 1.058 2.184 1.058.69 0 1.472-.238 2.346-.713a7.892 7.892 0 002.3-1.909c.184-.215.391-.322.621-.322zm-5.796-3.335c-.567 0-1.05.33-1.449.989-.383.66-.575 1.457-.575 2.392v.046c.905-.215 1.618-.537 2.14-.966.52-.43.781-.928.781-1.495 0-.291-.084-.521-.253-.69-.153-.184-.368-.276-.644-.276zm8.386 9.085c-.798 0-1.411-.184-1.84-.552-.414-.368-.621-.782-.621-1.242 0-.399.145-.744.437-1.035.291-.291.72-.437 1.288-.437.199 0 .429.023.69.069l.62.069a2.84 2.84 0 00-.275-1.127 4.879 4.879 0 00-.598-1.012 12.547 12.547 0 00-.69-.874c-.476.905-.951 1.656-1.426 2.254-.46.598-.966 1.165-1.518 1.702-.276.276-.568.414-.874.414a.77.77 0 01-.598-.253 1.007 1.007 0 01-.23-.667c0-.307.107-.59.322-.851l.299-.368c.843-1.043 1.48-1.901 1.909-2.576.276-.445.552-.974.828-1.587.291-.613.667-1.449 1.127-2.507.291-.675.897-1.012 1.817-1.012.429 0 .728.038.897.115.168.077.253.2.253.368 0 .092-.031.238-.092.437-.062.2-.146.399-.253.598-.276.552-.414 1.02-.414 1.403 0 .23.076.483.23.759.168.276.421.621.759 1.035.49.644.858 1.196 1.104 1.656.26.445.39.935.39 1.472 0 .644-.153 1.257-.46 1.84a3.588 3.588 0 01-1.241 1.38c-.537.353-1.15.529-1.84.529z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h95v28H0z" />
        </clipPath>
        <clipPath id="b">
          <path fill="#fff" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Home(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.496 8.025a.75.75 0 01.75.75v8.675a2.314 2.314 0 002.314 2.314h8.88a2.314 2.314 0 002.313-2.314V8.775a.75.75 0 011.5 0v8.675a3.814 3.814 0 01-3.814 3.814H7.56a3.814 3.814 0 01-3.814-3.814V8.775a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.06 3.41a3.127 3.127 0 013.88 0l7.525 5.958a.75.75 0 11-.93 1.176l-7.526-5.957a1.628 1.628 0 00-2.018 0l-7.525 5.957a.75.75 0 11-.931-1.176L10.06 3.41z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.668 4.193a.75.75 0 01.75.75v2.354a.75.75 0 01-1.5 0V4.943a.75.75 0 01.75-.75zm-5.694 9.495h.055c.377 0 .702 0 .97.02.283.022.565.071.838.203a2.25 2.25 0 011.05 1.05c.131.272.18.554.202.837.02.268.02.593.02.97v3.746a.75.75 0 01-1.5 0v-3.718c0-.412 0-.678-.015-.881-.016-.195-.041-.268-.059-.303a.75.75 0 00-.35-.35c-.035-.017-.108-.043-.302-.058a12.747 12.747 0 00-.881-.017c-.412 0-.679.001-.881.017-.195.015-.268.04-.303.058a.75.75 0 00-.35.35c-.017.035-.043.108-.058.303-.016.203-.016.469-.016.88v3.72a.75.75 0 01-1.5 0v-3.747c0-.377 0-.702.02-.97.022-.283.071-.565.203-.838a2.25 2.25 0 011.05-1.05c.273-.131.554-.18.837-.202.268-.02.593-.02.97-.02z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Search(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.248 3.5a7.289 7.289 0 100 14.577 7.289 7.289 0 000-14.577zM2.46 10.79a8.789 8.789 0 1117.577 0 8.789 8.789 0 01-17.577 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.736 15.648l5.616 5.6-1.06 1.063-5.615-5.601 1.06-1.062z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Archive(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 14l-3.002 3L9 14m2.998 3v-7m8.936-3H3.059"
      />
    </svg>
  );
}

export function Tag(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 01-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9.907 8.315a1.607 1.607 0 01-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 011.633-1.607c.864.003 1.575.736 1.571 1.62z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Settings(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.959 4.529A2.529 2.529 0 0111.488 2h1.221a1.243 1.243 0 00.035.001 2.542 2.542 0 012.458 2.602c.004.164.05.324.133.467l.003.005.002.003.003.005c.289.488.92.65 1.408.36l.01-.005a2.541 2.541 0 013.464.93v.001l.583 1.011c.015.025.028.05.039.077a2.54 2.54 0 01-.967 3.386l-.005.003c-.156.09-.286.22-.375.376l-.009.015-.001.002c-.28.49-.112 1.112.374 1.396l.002.002.015.008.038.023a2.528 2.528 0 01.887 3.445l-.004.008-.614 1.025a2.54 2.54 0 01-3.46.926 1.079 1.079 0 00-.497-.14h-.01a1.029 1.029 0 00-1.019 1.034v.01a2.54 2.54 0 01-2.541 2.524h-1.17a2.54 2.54 0 01-2.54-2.536.966.966 0 00-.147-.498 1.023 1.023 0 00-1.4-.37l-.003.002a.626.626 0 01-.03.016 2.541 2.541 0 01-3.442-.993l-.578-.996a1.144 1.144 0 01-.018-.03 2.528 2.528 0 01.938-3.447 1.041 1.041 0 00-.001-1.803h-.001a2.54 2.54 0 01-.93-3.466l.01-.015.622-1.024a2.54 2.54 0 013.46-.923l.009.005a.963.963 0 00.479.135 1.04 1.04 0 001.04-1.022V4.53zm6.386.557v.002-.002zM11.488 3.5c-.569 0-1.029.46-1.029 1.029v.023a2.541 2.541 0 01-2.547 2.505h-.005a2.463 2.463 0 01-1.226-.34 1.04 1.04 0 00-1.416.382l-.009.014-.62 1.02a1.04 1.04 0 00.385 1.413l-.376.65.375-.65a2.542 2.542 0 010 4.402h-.002a1.029 1.029 0 00-.377 1.411l.59 1.016.007.014a1.041 1.041 0 001.42.406 2.523 2.523 0 013.43.897l.003.003.013.021.002.005c.221.373.34.797.344 1.232v.007c0 .574.466 1.04 1.042 1.04h1.169a1.04 1.04 0 001.041-1.03 2.528 2.528 0 012.511-2.539h.049c.426.011.84.128 1.209.338l.003.002a1.04 1.04 0 001.419-.382l.005-.01.615-1.025a1.028 1.028 0 00-.382-1.41 2.528 2.528 0 01-.95-3.439l.022-.036a2.51 2.51 0 01.925-.923 1.04 1.04 0 00.38-1.413.71.71 0 01-.032-.06l-.55-.953a1.041 1.041 0 00-1.415-.383 2.527 2.527 0 01-3.457-.887l-.003-.005-.002-.003c0-.002-.002-.003-.003-.005a2.464 2.464 0 01-.343-1.262 1.042 1.042 0 00-1-1.074h-.032l-.01-.001h-1.173zM6.623 16.815l.002-.001-.002.001zm5.455-6.785a1.717 1.717 0 100 3.434 1.717 1.717 0 000-3.434zm-3.217 1.718a3.217 3.217 0 116.434-.001 3.217 3.217 0 01-6.434.001z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Restore(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.708 7.404a.75.75 0 01.983.398l1.316 3.114L9.1 9.608a.75.75 0 01.584 1.382L5.9 12.59a.75.75 0 01-.983-.4L3.309 8.387a.75.75 0 01.4-.982z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.915 5.664c-3.447 0-6.249 2.746-6.335 6.16a.75.75 0 01-1.5-.038c.108-4.228 3.575-7.622 7.835-7.622a7.838 7.838 0 017.835 7.835 7.833 7.833 0 01-7.835 7.835 7.843 7.843 0 01-6.457-3.384.75.75 0 111.232-.856 6.343 6.343 0 005.225 2.74 6.333 6.333 0 006.335-6.335 6.339 6.339 0 00-6.335-6.335z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Delete(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.852 3.879l.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005A1.004 1.004 0 014 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879zM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301m4.66 3.515v4.509m3.38-4.509v4.509"
      />
    </svg>
  );
}

export function Sun(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364l-.97.97M6.66 17.394l-.97.97m12.728 0l-.97-.97M6.66 6.606l-.97-.97"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.055 7.805a4.195 4.195 0 110 8.39 4.195 4.195 0 010-8.39z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Moon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.614 21.723c-2.53 0-5.03-.97-6.89-2.84-1.86-1.87-2.85-4.28-2.85-6.88 0-2.6 1.01-5.04 2.85-6.88 3.05-3.06 7.82-3.73 11.59-1.63.26.15.44.48.41.78-.03.33-.25.6-.57.7-3.05.94-5.19 3.83-5.19 7.03 0 3.21 2.14 6.1 5.19 7.02.29.09.53.38.57.68.04.3-.14.65-.4.8-1.47.82-3.1 1.22-4.71 1.22zm0-17.94c-2.14 0-4.25.83-5.83 2.4-1.58 1.57-2.41 3.62-2.41 5.82s.85 4.27 2.41 5.82c2.21 2.21 5.49 2.94 8.39 1.99-2.83-1.51-4.7-4.52-4.7-7.81s1.87-6.3 4.69-7.82c-.83-.27-1.7-.4-2.55-.4zm3.97 1.02s.01 0 .02.01c0 0-.01 0-.02-.01zm2.39 14.249c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06 8.179 8.179 0 002.41-5.81c0-2.19-.85-4.26-2.41-5.81a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0a9.653 9.653 0 012.85 6.87c0 2.59-1.01 5.04-2.85 6.87-.15.15-.34.22-.53.22z"
      />
    </svg>
  );
}

export function SystemTheme(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.47 19.825c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l14.12-14.12c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L6 19.605c-.15.15-.34.22-.53.22zm-1.86-4.5a.752.752 0 01-.3-1.44c.38-.16.84 0 1.01.38.17.38.01.81-.37.98l-.04.02c-.1.04-.2.06-.3.06zm.05-6.68a.766.766 0 01-.7-1.05c.16-.38.59-.56.97-.4h.03c.38.17.56.61.4.99-.12.29-.4.46-.69.46h-.01zm4.69-4.7c-.29 0-.57-.17-.69-.45-.16-.38 0-.84.38-1 .38-.17.82 0 .98.38v.03a.739.739 0 01-.68 1.05l.01-.01zm6.64-.03c-.09 0-.18-.02-.27-.05-.38-.16-.57-.57-.41-.95l.02-.06c.16-.38.6-.56.98-.4.38.16.56.6.4.98-.12.29-.42.48-.72.48zm2 17.689h-.05c-2.42-.22-4.42-2.03-4.87-4.4a.75.75 0 01.6-.88c.4-.07.8.19.88.6a3.95 3.95 0 002.03 2.74c-.44-1.42-.24-3.02.63-4.31a4.992 4.992 0 013.78-2.16c-.89-.76-2.1-1.11-3.3-.88-.4.07-.8-.19-.88-.6a.75.75 0 01.6-.88c2.37-.45 4.79.74 5.88 2.9.14.27.09.63-.11.86-.2.23-.55.33-.84.23-1.43-.44-3.03.12-3.89 1.38-.86 1.26-.79 2.96.16 4.13.19.23.22.59.08.86-.13.25-.42.41-.69.41h-.01zm-9-7.82c-.19 0-.38-.07-.53-.22a4.762 4.762 0 010-6.72 4.762 4.762 0 016.72 0c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0a3.253 3.253 0 00-4.6 4.6c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
      />
    </svg>
  );
}

export function Cross(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6l12 12m0-12L6 18"
      />
    </svg>
  );
}

export function Checkmark(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.993 10.222l-4.618 4.618a.746.746 0 01-1.061 0l-2.309-2.309a.75.75 0 011.06-1.061l1.78 1.779 4.087-4.088a.75.75 0 111.061 1.061zM12 2.5c-5.238 0-9.5 4.262-9.5 9.5 0 5.239 4.262 9.5 9.5 9.5s9.5-4.261 9.5-9.5c0-5.238-4.262-9.5-9.5-9.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Google(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.838 14.718a8.932 8.932 0 00.086-2.857.558.558 0 00-.557-.473h-7.805a.562.562 0 00-.562.562v2.206c0 .31.252.562.562.562h4.275c.176 0 .305.18.239.343-.935 2.31-3.39 3.826-6.132 3.32-2.106-.39-3.832-2.06-4.284-4.153a5.477 5.477 0 018.369-5.776.572.572 0 00.73-.06l1.703-1.733a.559.559 0 00-.046-.832 8.897 8.897 0 00-5.161-1.815c-4.872-.135-9.091 3.823-9.25 8.694-.167 5.108 3.927 9.302 8.995 9.302 4.383 0 8.037-3.14 8.838-7.29z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function HidePassword(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.42 17.73c-2.23-1.46-3.67-3.66-3.67-5.59 0-3.28 4.14-7.3 9.25-7.3 2.09 0 4.03.67 5.59 1.71m2.26 2.06c.891 1.13 1.41 2.38 1.41 3.53 0 3.28-4.15 7.3-9.26 7.3-.91 0-1.799-.13-2.63-.36"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.766 14.367a3.12 3.12 0 01-.925-2.23 3.159 3.159 0 015.394-2.24m.875 2.803a3.158 3.158 0 01-2.538 2.541m7.32-10.991L4.118 20.024"
      />
    </svg>
  );
}

export function ShowPassword(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.003 10.115c-1.332 0-2.412 1.036-2.412 2.315s1.08 2.316 2.412 2.316c1.332 0 2.412-1.037 2.412-2.316 0-1.28-1.08-2.315-2.412-2.315zM8.09 12.43c0-2.075 1.752-3.755 3.912-3.755s3.912 1.68 3.912 3.755c0 2.074-1.752 3.756-3.912 3.756S8.09 14.504 8.09 12.43z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.976 7.195A11.248 11.248 0 0112.002 4.7a11.25 11.25 0 017.026 2.493c1.775 1.44 2.976 3.377 2.976 5.237 0 1.86-1.2 3.797-2.976 5.237a11.249 11.249 0 01-7.026 2.493 11.248 11.248 0 01-7.026-2.494C3.2 16.226 2 14.289 2 12.43s1.2-3.795 2.976-5.235zm.968 1.1C4.37 9.571 3.5 11.14 3.5 12.43c0 1.29.87 2.859 2.444 4.136a9.71 9.71 0 006.058 2.154 9.712 9.712 0 006.058-2.153c1.574-1.277 2.444-2.846 2.444-4.137 0-1.291-.87-2.86-2.444-4.137a9.712 9.712 0 00-6.058-2.153 9.71 9.71 0 00-6.058 2.154z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Status(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.658 6.348c.27-.27.708-.27.979 0l.876.876a.692.692 0 01-.98.979l-.875-.876a.692.692 0 010-.98zm1.855 9.446c.27.27.27.709 0 .98l-1.589 1.589a.692.692 0 11-.98-.979l1.59-1.59c.27-.27.708-.27.979 0zm7.592 0c.27-.27.709-.27.98 0l1.588 1.59a.692.692 0 11-.98.979l-1.588-1.59a.692.692 0 010-.979zM11.308 4.583c.382 0 .692.31.692.693v.662a.692.692 0 11-1.384 0v-.662c0-.383.31-.692.692-.692zM2.824 12c0-.382.31-.692.692-.692h1.731a.692.692 0 010 1.384H3.516A.692.692 0 012.824 12zm13.852 0c0-.382.31-.692.693-.692h2.247a.692.692 0 010 1.384h-2.247a.692.692 0 01-.693-.692zm-5.368 5.368c.382 0 .692.31.692.693v2.247a.692.692 0 11-1.384 0V18.06c0-.383.31-.693.692-.693z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Plus(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 5a.75.75 0 01.75.75V11H18a.75.75 0 010 1.5h-5.25v5.25a.75.75 0 01-1.5 0V12.5H6A.75.75 0 016 11h5.25V5.75A.75.75 0 0112 5z"
      />
    </svg>
  );
}

export function Menu(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 16.762c-.695 0-1.262.565-1.262 1.26a1.262 1.262 0 002.523 0c0-.695-.566-1.26-1.26-1.26zm0-6.022c-.695 0-1.262.565-1.262 1.261a1.262 1.262 0 002.523 0c0-.696-.566-1.26-1.26-1.26zm0-3.5c.695 0 1.261-.565 1.261-1.261a1.262 1.262 0 00-2.523 0c0 .696.567 1.26 1.262 1.26z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Logout(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M21 11.998H8.945m12.055 0l-2.932-2.934M21 11.998l-2.932 2.936m-3.512-6.668V7.251a3.19 3.19 0 00-2.651-3.15L6.702 3.046C4.765 2.718 3 4.219 3 6.195v11.61c0 1.976 1.765 3.477 3.702 3.15l5.203-1.057a3.188 3.188 0 002.65-3.149v-1.014"
      />
    </svg>
  );
}

export function Lock(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M16.424 9.448V7.3a4.552 4.552 0 00-4.551-4.551 4.55 4.55 0 00-4.57 4.53v2.168"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M15.683 21.25H8.042a3.792 3.792 0 01-3.792-3.792v-4.29a3.792 3.792 0 013.792-3.791h7.641a3.792 3.792 0 013.792 3.792v4.289a3.792 3.792 0 01-3.792 3.792z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M11.862 14.203v2.22"
      />
    </svg>
  );
}

export function Info(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zm9.006 3.693v-4.3M12 8.355v-.063"
      />
    </svg>
  );
}

export function Font(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.999 10.979H14.63a1 1 0 00-1 1v1.13a1 1 0 102 0v-.13h1.154v4.409h-.39a1 1 0 100 2h2.84a1 1 0 100-2h-.45v-4.41h1.214v.13a1 1 0 102 0v-1.13a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.185 17.388H10.29V6.61h4.415v1.25a1 1 0 002 0V5.61a1 1 0 00-1-1H2.999a1 1 0 00-1 1v2.25a1 1 0 002 0V6.61H8.29v10.78H6.517a1 1 0 100 2h5.668a1 1 0 100-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function FontSansSerif(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.808 17.55H3L7.062 6.263H9.03l4.063 11.289h-1.808l-3.192-9.24h-.088l-3.197 9.239zm.303-4.42h5.865v1.433H5.111V13.13zm11.711 4.608c-.537 0-1.022-.1-1.455-.297a2.452 2.452 0 01-1.031-.877c-.25-.382-.375-.85-.375-1.405 0-.478.092-.872.276-1.18a2.02 2.02 0 01.744-.733 3.89 3.89 0 011.047-.408c.386-.092.78-.162 1.18-.21l1.234-.143c.316-.04.546-.105.69-.193.143-.088.214-.231.214-.43v-.038c0-.482-.136-.855-.407-1.12-.269-.264-.67-.396-1.202-.396-.555 0-.992.123-1.312.37-.316.242-.535.512-.656.81l-1.549-.353c.184-.515.452-.93.805-1.246.356-.32.766-.551 1.229-.695a4.8 4.8 0 011.46-.22c.339 0 .697.04 1.076.121.382.077.738.22 1.069.43.334.21.608.509.821.899.213.385.32.887.32 1.504v5.623h-1.61v-1.158h-.066a2.346 2.346 0 01-.48.629 2.548 2.548 0 01-.82.512c-.335.136-.736.204-1.202.204zm.358-1.323c.456 0 .845-.09 1.169-.27a1.89 1.89 0 00.744-.705 1.83 1.83 0 00.259-.943v-1.091c-.059.058-.173.114-.342.165a5.31 5.31 0 01-.568.127c-.213.033-.42.064-.622.093-.203.026-.372.048-.508.067-.32.04-.611.108-.876.204-.261.095-.47.233-.629.413-.154.176-.231.412-.231.706 0 .407.15.716.452.926.301.205.685.308 1.152.308z"
      />
    </svg>
  );
}

export function FontSerif(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.501 6.317l3.858 9.928c.147.39.316.653.506.79.2.137.384.21.553.221v.317a11.037 11.037 0 00-.901-.032c-.337-.01-.68-.016-1.028-.016-.442 0-.853.006-1.233.016-.38 0-.685.01-.917.032v-.317c.538-.02.875-.11 1.012-.268.148-.169.116-.522-.095-1.06L7.411 8.245l.253-.284-2.625 6.86c-.19.475-.305.87-.347 1.187-.032.316-.006.563.079.743a.79.79 0 00.474.379 2.9 2.9 0 00.822.126v.317a14.481 14.481 0 00-.964-.032 27.21 27.21 0 00-.902-.016c-.252 0-.48.006-.68.016-.189 0-.363.01-.521.032v-.317c.221-.052.443-.184.664-.395.221-.21.432-.569.632-1.075l3.668-9.47h.537zm1.66 6.703v.316h-4.71l.157-.316h4.553zm5.559 4.663c-.443 0-.822-.084-1.138-.253a1.679 1.679 0 01-.712-.695 2.11 2.11 0 01-.237-1.012c0-.464.106-.838.316-1.122.211-.296.48-.533.806-.712.338-.179.69-.327 1.06-.442.38-.127.732-.243 1.059-.348.337-.116.611-.248.822-.396.221-.147.332-.342.332-.584v-1.075c0-.38-.063-.68-.19-.902a1.006 1.006 0 00-.49-.49 1.689 1.689 0 00-.727-.142c-.242 0-.5.037-.775.11-.274.064-.49.196-.648.396.232.063.422.19.57.38a.99.99 0 01.236.68c0 .294-.1.526-.3.695-.19.168-.432.253-.727.253-.327 0-.57-.1-.727-.3a1.18 1.18 0 01-.238-.728c0-.284.069-.516.206-.696.148-.179.337-.347.57-.505.252-.169.573-.311.963-.427.4-.116.844-.174 1.328-.174.454 0 .843.053 1.17.158.338.095.617.253.838.474.264.243.438.548.522.917.084.358.126.796.126 1.312v4.364c0 .263.032.453.095.569.074.105.19.158.348.158a.61.61 0 00.3-.08 2.32 2.32 0 00.364-.236l.158.268c-.221.18-.448.322-.68.427-.221.106-.506.158-.854.158-.337 0-.61-.052-.822-.158a1.052 1.052 0 01-.474-.458 1.73 1.73 0 01-.142-.743c-.274.442-.6.78-.98 1.011-.38.232-.822.348-1.328.348zm.759-.759c.295 0 .569-.084.822-.252.263-.17.506-.422.727-.76v-3.145a1.502 1.502 0 01-.506.442c-.221.116-.458.238-.711.364a5.162 5.162 0 00-.728.443 1.956 1.956 0 00-.553.616c-.147.253-.221.575-.221.965 0 .41.105.737.316.98.21.231.495.347.854.347z"
      />
    </svg>
  );
}

export function FontMonospace(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3 17.365l3.605-10.93H8.54l3.604 10.93h-1.769l-1.769-5.957-.534-1.803-.5-1.835h-.067a56.224 56.224 0 01-.5 1.835c-.168.601-.34 1.202-.518 1.803l-1.786 5.957H3zm2.02-3.137v-1.319h5.072v1.319H5.02zm11.324 3.338c-.523 0-.996-.095-1.418-.284-.412-.2-.74-.473-.985-.818-.234-.356-.35-.773-.35-1.251 0-.913.445-1.608 1.335-2.086.9-.479 2.375-.796 4.422-.952a2.116 2.116 0 00-.234-.918 1.418 1.418 0 00-.65-.65c-.29-.167-.674-.25-1.152-.25a3.69 3.69 0 00-.985.133 4.725 4.725 0 00-.934.333c-.3.145-.584.295-.851.451l-.618-1.118c.3-.178.646-.356 1.035-.534a6.3 6.3 0 011.252-.45 5.825 5.825 0 011.385-.168c.756 0 1.385.14 1.886.418.5.278.878.673 1.134 1.184.256.512.384 1.13.384 1.853v4.906h-1.352l-.133-1.051h-.05a7.91 7.91 0 01-1.469.884 3.999 3.999 0 01-1.652.367zm.467-1.319a3.12 3.12 0 001.285-.284c.423-.189.84-.456 1.252-.8v-1.936c-1.068.078-1.908.2-2.52.367-.6.167-1.023.378-1.268.634a1.186 1.186 0 00-.367.868c0 .267.072.49.217.667.155.167.356.29.6.367.245.078.512.117.801.117z"
      />
    </svg>
  );
}

export function Clock(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.25 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zM2.5 12a9.75 9.75 0 019.75-9.75A9.75 9.75 0 0122 12c0 5.384-4.364 9.75-9.75 9.75-5.385 0-9.75-4.366-9.75-9.75z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.922 7.827a.75.75 0 01.75.75v3.672l2.81 1.68a.75.75 0 11-.77 1.287l-3.174-1.897a.75.75 0 01-.366-.644V8.577a.75.75 0 01.75-.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ChevronRight(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.47 7.47a.75.75 0 011.06 0l4 4a.75.75 0 010 1.06l-4 4a.75.75 0 11-1.06-1.06L12.94 12 9.47 8.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ArrowLeft(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.75 20.414L7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Circle(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path d="M0 8a8 8 0 1116 0A8 8 0 010 8z" fill="#335CFF" />
      <path d="M4 8a4 4 0 118 0 4 4 0 01-8 0z" fill="currentColor" />
    </svg>
  );
}

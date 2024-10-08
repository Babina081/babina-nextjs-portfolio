"use client";
import { useState } from "react";

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-screen w-full flex justify-center items-end z-20 fixed bottom-0 floating-nav">
      <svg
        width="100"
        height="50"
        viewBox="0 -0.5 26.458 13.229"
        aria-labelledby="#title"
        aria-describedby="#description"
        onClick={toggleMenu}
        className="cursor-pointer"
      >
        <title id="title">Menu</title>
        <desc id="description">
          Menu which is toggled to show additional sections
        </desc>
        <g id="house-menu" className={`menu ${isOpen ? "menu--active hover:" : ""}`}>
          <path
            d="M71.742 16.311a39.622 39.41 0 0 1 7.567 23.164H39.688z"
            fill="#fff"
            stroke="#11f"
            stroke-width=".132"
            transform="matrix(.33334 0 0 .33333 0 0)"
          />
          <g fill="#33f">
            <path d="M22.235 9.545l.207.766-.789.21-.206-.766z" />
            <path d="M22.718 9.416l.952.904-.37 1.256-.67.178-.581-2.16z" />
            <path d="M22.61 10.938l.207.767-.788.21-.207-.767zm1.566-.762l-1.384-1.162-.28.075 1.385 1.161-.616 1.695.28-.075z" />
          </g>
        </g>
        <g id="picture-menu" className={`menu ${isOpen ? "menu--active hover:" : ""}`}>
          <path
            d="M51.931 1.995A39.622 39.41 0 0 1 71.742 16.31L39.688 39.475z"
            fill="#fff"
            stroke="#11f"
            stroke-width=".132"
            transform="matrix(.33334 0 0 .33333 0 0)"
          />
          <g transform="matrix(.11362 .11301 -.1128 .1122 50.185 -27.966)">
            <path
              d="M1.537 279.16h16.638v16.638H1.537z"
              fill="none"
              stroke="#33f"
              stroke-width=".529"
            />
            <path
              d="M2.873 280.63h16.638v16.638H2.873z"
              fill="#fff"
              stroke="#33f"
              stroke-width=".529"
            />
            <path
              d="M4.11 296.065h14.165v-5.546l-4.21 2.512-5.212-6.99-4.744 6.202z"
              fill="#33f"
            />
            <circle cx="16.437" cy="284.906" r="1.336" fill="#33f" />
          </g>
        </g>
        <g id="messages-menu" className={`menu ${isOpen ? "menu--active hover:" : ""}`}>
          <path
            d="M27.444 1.995a39.622 39.41 0 0 1 24.487 0l-12.243 37.48z"
            fill="#fff"
            stroke="#11f"
            stroke-width=".132"
            transform="matrix(.33334 0 0 .33333 0 0)"
          />
          <g transform="matrix(.33334 0 0 .33333 0 0)">
            <g transform="matrix(-.28227 0 0 .29523 44.719 -70.28)" fill="#33f">
              <ellipse
                cx="13.631"
                cy="276.821"
                rx="11.41"
                ry="7.534"
                stroke="#33f"
                stroke-width="1.748"
              />
              <path d="M6.932 282.147s-.052 2.37-3.16 3.068c0 0 5.46.967 6.373-.9z" />
            </g>
            <ellipse
              cx="17.506"
              cy="298.002"
              rx="11.41"
              ry="7.534"
              transform="matrix(.33313 0 0 .39234 31.544 -107.102)"
              fill="#fff"
            />
            <g transform="matrix(.28227 0 0 .29523 33.308 -71.76)" fill="#fff">
              <ellipse
                ry="7.534"
                rx="11.41"
                cy="276.821"
                cx="13.631"
                stroke="#33f"
                stroke-width="1.748"
              />
              <path
                d="M6.932 282.147s-.052 2.37-3.16 3.068c0 0 5.46.967 6.373-.9z"
                fill="#33f"
              />
            </g>
          </g>
        </g>
        <g id="alarm-menu" className={`menu ${isOpen ? "menu--active hover:" : ""}`}>
          <path
            d="M7.633 16.311a39.622 39.41 0 0 1 19.81-14.316l12.245 37.48z"
            fill="#fff"
            stroke="#11f"
            stroke-width=".132"
            transform="matrix(.33334 0 0 .33333 0 0)"
          />
          <g transform="matrix(.0771 -.07669 .0783 .07787 -15.999 -15.839)">
            <circle
              transform="translate(-.194)"
              r="10.023"
              cy="287.245"
              cx="13.764"
              fill="none"
              stroke="#33f"
              stroke-width="1.058"
            />
            <g fill="#33f">
              <path d="M12.506 280.054h1.326v8.784h-1.326z" />
              <path d="M18.36 287.512v1.326h-5.854v-1.326z" />
            </g>
            <path
              d="M1.35 283.207a4.824 4.824 0 0 1-1.249-4.66 4.824 4.824 0 0 1 3.411-3.41 4.824 4.824 0 0 1 4.66 1.248l-3.411 3.411zm24.44 0a4.824 4.824 0 0 0 1.25-4.66 4.824 4.824 0 0 0-3.412-3.41 4.824 4.824 0 0 0-4.66 1.248l3.412 3.411z"
              fill="#33f"
            />
          </g>
        </g>
        <g id="folder-menu" className={`menu ${isOpen ? "menu--active hover:" : ""}`}>
          <path
            d="M.066 39.475a39.622 39.41 0 0 1 7.567-23.164l32.055 23.164z"
            fill="#fff"
            stroke="#11f"
            stroke-width=".132"
            transform="matrix(.33334 0 0 .33333 0 0)"
          />
          <g fill="#33f">
            <g transform="matrix(.01152 -.04277 .0443 .0118 -3.201 13.82)">
              <path d="M88.446 113.338h46.869v37.008H88.446z" />
              <rect
                rx="2.27"
                y="106.996"
                x="88.446"
                height="9.082"
                width="19.092"
              />
              <path d="M88.446 106.996h13.73v9.082h-13.73z" />
            </g>
            <path
              d="M143.528 125.499h46.869v34.619h-46.869z"
              transform="matrix(.01152 -.04277 .03763 .0258 -3.201 13.82)"
              stroke="#fff"
              stroke-width="1.092"
            />
          </g>
        </g>
        <g id="toggle-menu">
          <path
            d="M9.417 13.158a3.791 3.812 90 0 1 1.906-3.283 3.791 3.812 90 0 1 3.812 0 3.791 3.812 90 0 1 1.906 3.283h-3.812z"
            fill="#33f"
          />
          <path
            id="horizontal-rectangle"
            d="M14.026 11.39v.529h-1.595v-.529z"
            fill="#fff"
          />
          <path
            id="vertical-rectangle"
            d="M13.495 12.448h-.532V10.86h.532z"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};

export default FloatingNav;

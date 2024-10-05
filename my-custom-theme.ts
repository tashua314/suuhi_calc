import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "var(--color-surface-800)",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #0494ec 
		"--color-primary-50": "217 239 252", // #d9effc
		"--color-primary-100": "205 234 251", // #cdeafb
		"--color-primary-200": "192 228 250", // #c0e4fa
		"--color-primary-300": "155 212 247", // #9bd4f7
		"--color-primary-400": "79 180 242", // #4fb4f2
		"--color-primary-500": "4 148 236", // #0494ec
		"--color-primary-600": "4 133 212", // #0485d4
		"--color-primary-700": "3 111 177", // #036fb1
		"--color-primary-800": "2 89 142", // #02598e
		"--color-primary-900": "2 73 116", // #024974
		// secondary | #4dbae3 
		"--color-secondary-50": "228 245 251", // #e4f5fb
		"--color-secondary-100": "219 241 249", // #dbf1f9
		"--color-secondary-200": "211 238 248", // #d3eef8
		"--color-secondary-300": "184 227 244", // #b8e3f4
		"--color-secondary-400": "130 207 235", // #82cfeb
		"--color-secondary-500": "77 186 227", // #4dbae3
		"--color-secondary-600": "69 167 204", // #45a7cc
		"--color-secondary-700": "58 140 170", // #3a8caa
		"--color-secondary-800": "46 112 136", // #2e7088
		"--color-secondary-900": "38 91 111", // #265b6f
		// tertiary | #005c7a 
		"--color-tertiary-50": "217 231 235", // #d9e7eb
		"--color-tertiary-100": "204 222 228", // #ccdee4
		"--color-tertiary-200": "191 214 222", // #bfd6de
		"--color-tertiary-300": "153 190 202", // #99beca
		"--color-tertiary-400": "77 141 162", // #4d8da2
		"--color-tertiary-500": "0 92 122", // #005c7a
		"--color-tertiary-600": "0 83 110", // #00536e
		"--color-tertiary-700": "0 69 92", // #00455c
		"--color-tertiary-800": "0 55 73", // #003749
		"--color-tertiary-900": "0 45 60", // #002d3c
		// success | #013e6a 
		"--color-success-50": "217 226 233", // #d9e2e9
		"--color-success-100": "204 216 225", // #ccd8e1
		"--color-success-200": "192 207 218", // #c0cfda
		"--color-success-300": "153 178 195", // #99b2c3
		"--color-success-400": "77 120 151", // #4d7897
		"--color-success-500": "1 62 106", // #013e6a
		"--color-success-600": "1 56 95", // #01385f
		"--color-success-700": "1 47 80", // #012f50
		"--color-success-800": "1 37 64", // #012540
		"--color-success-900": "0 30 52", // #001e34
		// warning | #e17e76 
		"--color-warning-50": "251 236 234", // #fbecea
		"--color-warning-100": "249 229 228", // #f9e5e4
		"--color-warning-200": "248 223 221", // #f8dfdd
		"--color-warning-300": "243 203 200", // #f3cbc8
		"--color-warning-400": "234 165 159", // #eaa59f
		"--color-warning-500": "225 126 118", // #e17e76
		"--color-warning-600": "203 113 106", // #cb716a
		"--color-warning-700": "169 95 89", // #a95f59
		"--color-warning-800": "135 76 71", // #874c47
		"--color-warning-900": "110 62 58", // #6e3e3a
		// error | #703e40 
		"--color-error-50": "234 226 226", // #eae2e2
		"--color-error-100": "226 216 217", // #e2d8d9
		"--color-error-200": "219 207 207", // #dbcfcf
		"--color-error-300": "198 178 179", // #c6b2b3
		"--color-error-400": "155 120 121", // #9b7879
		"--color-error-500": "112 62 64", // #703e40
		"--color-error-600": "101 56 58", // #65383a
		"--color-error-700": "84 47 48", // #542f30
		"--color-error-800": "67 37 38", // #432526
		"--color-error-900": "55 30 31", // #371e1f
		// surface | #be2ba9 
		"--color-surface-50": "245 223 242", // #f5dff2
		"--color-surface-100": "242 213 238", // #f2d5ee
		"--color-surface-200": "239 202 234", // #efcaea
		"--color-surface-300": "229 170 221", // #e5aadd
		"--color-surface-400": "210 107 195", // #d26bc3
		"--color-surface-500": "190 43 169", // #be2ba9
		"--color-surface-600": "171 39 152", // #ab2798
		"--color-surface-700": "143 32 127", // #8f207f
		"--color-surface-800": "114 26 101", // #721a65
		"--color-surface-900": "93 21 83", // #5d1553
		
	}
}
const svg = {
  c: {
    data: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjEgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPiAgICAgICAgPHRpdGxlPlBhdGg8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+ICAgICAgICA8cGF0aCBpZD0icGF0aC0xIiBkPSJNMjAuNDE1Mjk0NCw0LjU2MTg3MDUyIEMxOC4yNTU1NjQzLDIuMzIzNDM3OTkgMTUuMjMwMjUyOCwwLjkzMjEwNTIzNSAxMS44ODEzMjk1LDAuOTMyMTA1MjM1IEM1LjMxOTQ1MjQxLDAuOTMyMTA1MjM1IDAsNi4yNzM3NzIxNiAwLDEyLjg2MzA1MjIgQzAsMTkuNDUyMzMyMyA1LjMxOTQ1MjQxLDI0Ljc5Mzk5OTMgMTEuODgxMzI5NSwyNC43OTM5OTkzIEMxNS4xNTM5NDA2LDI0Ljc5Mzk5OTMgMTguMTE3NTIwMiwyMy40NjUzNTI5IDIwLjI2NjMxMDYsMjEuMzE1OTMgTDE2LjUxMDEzMTcsMTcuNTQ0MDY0OSBDMTUuMzQyNzY2MiwxOC42MDcwMTIzIDEzLjc5MzQ0NjQsMTkuMjU0NjMxIDEyLjA5MzQ5NjEsMTkuMjU0NjMxIEM4LjQ2MTAyODQzLDE5LjI1NDYzMSA1LjUxNjMzMTU2LDE2LjI5NzYzNjggNS41MTYzMzE1NiwxMi42NDk5OTk2IEM1LjUxNjMzMTU2LDkuMDAyMzYyNDMgOC40NjEwMjg0Myw2LjA0NTM2ODI0IDEyLjA5MzQ5NjEsNi4wNDUzNjgyNCBDMTMuOTc3NzE5OSw2LjA0NTM2ODI0IDE1LjY3Njg4NjgsNi44NDA5OTk2MiAxNi44NzU5OTc2LDguMTE1OTQ3NyBMMjAuNDE1Mjk0NCw0LjU2MTg3MDUyIEwyMC40MTUyOTQ0LDQuNTYxODcwNTIgTDIwLjQxNTI5NDQsNC41NjE4NzA1MiBaIj48L3BhdGg+ICAgIDwvZGVmcz4gICAgPGcgaWQ9IlBhZ2UtMiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+ICAgICAgICA8ZyBpZD0iRm9vdGVyLWNvcHlyaWdodCIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3LjAwMDAwMCwgLTEwOS4wMDAwMDApIj4gICAgICAgICAgICA8ZyBpZD0iV2hpdGUtY29weXJpZ2h0LWxvZ28iIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgOTMuMDAwMDAwKSI+ICAgICAgICAgICAgICAgIDxnIGlkPSJsZXR0ZXJzLWxvZ28tVyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4yMzgwMDIsIDE1LjIxOTYxMykiPiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlBhdGgiPiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0ibm9uZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJub25lIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9Im5vbmUiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0ibm9uZSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPiAgICAgICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+',
    width: 21,
    height: 24
  },
  r: {
    data: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTggMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPiAgICAgICAgPHRpdGxlPlBhdGg8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+ICAgICAgICA8cGF0aCBkPSJNMjYuMzA4NjU4Miw4LjM4ODk0NzEyIEwyNi4zMDg2NTgyLDI0LjM2Nzg5NCBMMzEuNDAwNjU2NiwyNC4zNjc4OTQgTDMxLjQwMDY1NjYsMTUuNDE5NjgzNyBMMzMuNzcwNzcxNCwxNS40MTk2ODM3IEMzNC44ODc0Mzc1LDE3Ljc0MTc0ODcgMzguMTY5NTQ1MywyNC4zNjc4OTM3IDM4LjA2MTYzMTEsMjQuMzY3ODk0IEMzNy45MzMyNzQ1LDI0LjM2Nzg5NDQgNDMuNzA2MzE5MywyNC4zNjc4OTQgNDMuNzA2MzE5MywyNC4zNjc4OTQgQzQzLjcwNjMxOTMsMjQuMzY3ODk0IDQwLjMxNDE4MjUsMTcuMjk2NjcwNyAzOS4xNjQ4NDk0LDE0LjkwNjQyNTQgQzQxLjgyNTkzNDcsMTMuODQwMTIwNyA0My43MDYzMTkzLDExLjIyODUxODMgNDMuNzA2MzE5Myw4LjE3NTg5NDQ5IEM0My43MDYzMTkzLDQuMTc1MjYwMTUgNDAuNDc2NjUxNywxLjM1ODIxMDQ5IDM2LjQ5MjY1NDksMS4zNTgyMTA0OSBMMjYuMzA4NjU4MiwxLjM1ODIxMDQ5IEwyNi4zMDg2NTgyLDguMzg4OTQ3MTIgWiBNMzguNjE0MzIwOSw4LjYwMTk5OTc0IEMzOC42MTQzMjA5LDEwLjI0OTMxOTggMzcuMjg0NDU3OCwxMS4xNTg2MzEyIDM1LjY0Mzk4ODUsMTEuMTU4NjMxMiBMMzEuNDAwNjU2NiwxMS4xNTg2MzEyIEwzMS40MDA2NTY2LDguMTc1ODk0NDkgTDMxLjQwMDY1NjYsNi4wNDUzNjgyNCBMMzUuNjQzOTg4NSw2LjA0NTM2ODI0IEMzNy4yODQ0NTc4LDYuMDQ1MzY4MjQgMzguNjE0MzIwOSw2Ljk1NDY3OTcyIDM4LjYxNDMyMDksOC42MDE5OTk3NCBaIiBpZD0icGF0aC0xIj48L3BhdGg+ICAgIDwvZGVmcz4gICAgPGcgaWQ9IlBhZ2UtMiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+ICAgICAgICA8ZyBpZD0iRm9vdGVyLWNvcHlyaWdodCIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy4wMDAwMDAsIC0xMDkuMDAwMDAwKSI+ICAgICAgICAgICAgPGcgaWQ9IldoaXRlLWNvcHlyaWdodC1sb2dvIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDkzLjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8ZyBpZD0ibGV0dGVycy1sb2dvLVciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMjM4MDAyLCAxNS4yMTk2MTMpIj4gICAgICAgICAgICAgICAgICAgIDxnIGlkPSJQYXRoIj4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9Im5vbmUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0ibm9uZSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJub25lIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9Im5vbmUiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4gICAgICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==',
    width: 18,
    height: 24
  },
  e: {
    data: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTYgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPiAgICAgICAgPHRpdGxlPlBhdGggQ29weTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz4gICAgICAgIDxwYXRoIGlkPSJwYXRoLTEiIGQ9Ik0xMTMuNDQ1MjAzLDMuNzAxNzg5MzYgTDExMy40NDUyMDMsMS4zNTgyMTA0OSBMMTI3Ljk4NzY0MiwxLjM1ODIxMDQ5IEwxMjcuOTg3NjQyLDYuMDQ1MzY4MjQgTDExOC41Mzc0Niw2LjA0NTM2ODI0IEwxMTguNTM3NDYsMTAuMzA2NDIwNyBMMTI2LjE3NTg0NiwxMC4zMDY0MjA3IEwxMjYuMTc1ODQ2LDE0Ljk5MzU3ODUgTDExOC41Mzc0NiwxNC45OTM1Nzg1IEwxMTguNTM3NDYsMTkuNjgwNzM2MiBMMTI3Ljg3MzI2NSwxOS42ODA3MzYyIEwxMjcuODczMjY1LDI0LjM2Nzg5NCBMMTE1Ljk5MTMzMSwyNC4zNjc4OTQgTDExMy40NDUyMDMsMjQuMzY3ODk0IEwxMTMuNDQ1MjAzLDMuNzAxNzg5MzYgTDExMy40NDUyMDMsMy43MDE3ODkzNiBaIj48L3BhdGg+ICAgIDwvZGVmcz4gICAgPGcgaWQ9IlBhZ2UtMiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+ICAgICAgICA8ZyBpZD0iRm9vdGVyLWNvcHlyaWdodCIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMC4wMDAwMDAsIC0xMDkuMDAwMDAwKSI+ICAgICAgICAgICAgPGcgaWQ9IldoaXRlLWNvcHlyaWdodC1sb2dvIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDkzLjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8ZyBpZD0ibGV0dGVycy1sb2dvLVciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMjM4MDAyLCAxNS4yMTk2MTMpIj4gICAgICAgICAgICAgICAgICAgIDxnIGlkPSJQYXRoLUNvcHkiPiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0ibm9uZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJub25lIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9Im5vbmUiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0ibm9uZSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPiAgICAgICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+',
    width: 16,
    height: 24
  },
  a: {
    data: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNXB4IiB2aWV3Qm94PSIwIDAgMjQgMjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPiAgICAgICAgPHRpdGxlPlBhdGg8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+ICAgICAgICA8cGF0aCBkPSJNODAuNjIzMzA3NCwwLjUwNTk5OTk4NSBMOTIuMDgwMzAzNywyNC4zNjc4OTQgTDY5LjE2NjMxMTEsMjQuMzY3ODk0IEw4MC42MjMzMDc0LDAuNTA1OTk5OTg1IFogTTgwLjYyMzMwNzQsMTIuMDEwODQxNyBMODQuMDE3OTczLDE5LjI1NDYzMSBMNzcuMjI4NjQxOCwxOS4yNTQ2MzEgTDgwLjYyMzMwNzQsMTIuMDEwODQxNyBaIiBpZD0icGF0aC0xIj48L3BhdGg+ICAgIDwvZGVmcz4gICAgPGcgaWQ9IlBhZ2UtMiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+ICAgICAgICA8ZyBpZD0iRm9vdGVyLWNvcHlyaWdodCIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ni4wMDAwMDAsIC0xMDguMDAwMDAwKSI+ICAgICAgICAgICAgPGcgaWQ9IldoaXRlLWNvcHlyaWdodC1sb2dvIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDkzLjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8ZyBpZD0ibGV0dGVycy1sb2dvLVciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMjM4MDAyLCAxNS4yMTk2MTMpIj4gICAgICAgICAgICAgICAgICAgIDxnIGlkPSJQYXRoIj4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9Im5vbmUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0ibm9uZSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJub25lIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9Im5vbmUiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4gICAgICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==',
    width: 24,
    height: 25
  },
  t: {
    data: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTdweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTcgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPiAgICAgICAgPHRpdGxlPlBhdGg8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+ICAgICAgICA8cGF0aCBpZD0icGF0aC0xIiBkPSJNOTguNDQ1MzAxNyw2LjA0NTM2ODI0IEw5My4zNTMzMDMzLDYuMDQ1MzY4MjQgTDkzLjM1MzMwMzMsMS4zNTgyMTA0OSBMMTA5LjA1MzYzMiwxLjM1ODIxMDQ5IEwxMDkuMDUzNjMyLDYuMDQ1MzY4MjQgTDEwMy41MzczLDYuMDQ1MzY4MjQgTDEwMy41MzczLDI0LjM2Nzg5NCBMOTguNDQ1MzAxNywyNC4zNjc4OTQgTDk4LjQ0NTMwMTcsNi4wNDUzNjgyNCBMOTguNDQ1MzAxNyw2LjA0NTM2ODI0IEw5OC40NDUzMDE3LDYuMDQ1MzY4MjQgWiI+PC9wYXRoPiAgICA8L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPiAgICAgICAgPGcgaWQ9IkZvb3Rlci1jb3B5cmlnaHQiIHNrZXRjaDp0eXBlPSJNU0FydGJvYXJkR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTAuMDAwMDAwLCAtMTA5LjAwMDAwMCkiPiAgICAgICAgICAgIDxnIGlkPSJXaGl0ZS1jb3B5cmlnaHQtbG9nbyIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA5My4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGcgaWQ9ImxldHRlcnMtbG9nby1XIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjIzODAwMiwgMTUuMjE5NjEzKSI+ICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iUGF0aCI+ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJub25lIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9Im5vbmUiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0ibm9uZSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJub25lIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=',
    width: 17,
    height: 24
  }
};

class LogoFooterMagic {

  constructor(options) {
    this.elID = options.elem
    this.color = options.color;
    this.prefix = options.prefix;
    this.domEl = document.getElementById(this.elID);
    this.initDom();
    this.initAnimation();
  }

  css(svg, selector) {
    return `
      ${selector} {
        background: ${this.color};
        -webkit-mask-image: url(${svg.data});
        mask-image: url(${svg.data});
        width: ${svg.width}px;
        height: ${svg.height}px;
      }
    `;
  }

  initDom() {
    const c =   this.css(svg.c, `#${this.prefix}createspbBoxLogoC`),
          r =   this.css(svg.r, `#${this.prefix}createspbBoxLogoR`),
          e =   this.css(svg.e, `#${this.prefix}createspbBoxLogoE`),
          e1 =  this.css(svg.e, `#${this.prefix}createspbBoxLogoE1`),
          a =   this.css(svg.a, `#${this.prefix}createspbBoxLogoA`),
          t =   this.css(svg.t, `#${this.prefix}createspbBoxLogoT`);

    this.domEl.innerHTML = `
      <div id="${this.prefix}createspbBox">
        <a id="${this.prefix}createspbBoxLink" target="_blank" href="http://createdigital.me/"></a>
        <div id="${this.prefix}createspbBoxDev">Разработано в</div>
        <div id="${this.prefix}createspbBoxLogo">
          <div id="${this.prefix}createspbBoxLogoC"></div>
          <div id="${this.prefix}createspbBoxLogoR"></div>
          <div id="${this.prefix}createspbBoxLogoE"></div>
          <div id="${this.prefix}createspbBoxLogoA"></div>
          <div id="${this.prefix}createspbBoxLogoT"></div>
          <div id="${this.prefix}createspbBoxLogoE1"></div>
        </div>
      </div>
      <style>
        #${this.prefix}createspbBox {
          position: relative;
          text-align: left;
        }
        #${this.prefix}createspbBoxLink {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
        }
        #${this.prefix}createspbBox .opacity {
          opacity: .3;
        }
        #${this.prefix}createspbBoxDev {
          margin: 0 0 3px 0;
          transition: all .5s;
          line-height: 16px;
          font-size: 12px;
          font-family: Arial, sans-serif;
          color: ${this.color};
          opacity: .7;
        }
        #${this.prefix}createspbBoxLogo {
          overflow: hidden;
        }
        #${this.prefix}createspbBoxLogo div {
          float: left;
          transition: all .5s;
        }
        #${this.prefix}createspbBoxLogoC {
          margin: 0 5px 0 0;
        }
        #${this.prefix}createspbBoxLogoR {
          margin: 0 6px 0 0;
        }
        #${this.prefix}createspbBoxLogoE {
          margin: 0 3px 0 0;
        }
        #${this.prefix}createspbBoxLogoA {
          margin: -1px 1px 0 0;
        }
        #${this.prefix}createspbBoxLogoT {
          margin: 0 4px 0 0;
        }
        ${c}
        ${r}
        ${e}
        ${e1}
        ${a}
        ${t}
      </style>
    `;
    this.dev = document.getElementById(`${this.prefix}createspbBoxDev`);
    this.letters = [
      document.getElementById(`${this.prefix}createspbBoxLogoE1`),
      document.getElementById(`${this.prefix}createspbBoxLogoT`),
      document.getElementById(`${this.prefix}createspbBoxLogoA`),
      document.getElementById(`${this.prefix}createspbBoxLogoE`),
      document.getElementById(`${this.prefix}createspbBoxLogoR`),
      document.getElementById(`${this.prefix}createspbBoxLogoC`)
    ];
    this.right = true;
  }

  initAnimation() {
    setTimeout(() => {
      this.animate();
    }, 2500);
  }

  animate() {
    this.letters = this.letters.reverse();
    if (this.right === true) {
      this.animateElem(this.dev);
    } else {
      setTimeout(() => {
        this.animateElem(this.dev);
      }, 500)
    }
    this.right = !this.right;
    for (var i in this.letters) {
      this.animateElem(this.letters[i], i);
    }
    setTimeout(() => {
      this.animate();
    }, 2500);
  }

  animateElem(el, i) {
    setTimeout(() => {
      el.className = 'opacity';
      setTimeout(() => {
        el.className = '';
      }, 500);
    }, i * 100);
  }

}

export default LogoFooterMagic;

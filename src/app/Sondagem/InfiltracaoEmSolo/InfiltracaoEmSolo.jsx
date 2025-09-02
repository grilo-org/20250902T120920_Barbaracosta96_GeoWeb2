import React, { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';
import Navbar from '../NavbarSondagem/navbarSondagem';
import Conexao from '../../Config/conexao';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import download from "downloadjs";





export default function InfiltracaoEmSolo(){

    const base64String = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAAHaCAYAAAAzC7QxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAB3RJTUUH5wcRES8Ge4s5bwAAJqdJREFUeNrt3Xd0HNdh7/Hv7GJRiN57I0WCYhcpFrGJpEVJTKRYsmx1KollP9nPPjlOfPLHezkvzT75I3aej3PyEsexFVsSVShZlmzZarQoVtFUZW8gUYhOACQK0Ra78/64gwFpk5IJiVjg6vc5h2cXC+zMvXfmN7fMSgsiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIy4TnjsZOjR113YMA8d91YV/njcRxISOgmLq6FQCA48ioA4XCY7OxsAHJzc8elba+m6urqSxwtl/7+SgCGh4NXuMWPz3EgKwvKypxJ375XU9x47OSllyAcNs8zMmJd5Y8nGIQXX/x33n77X3Cci0/s4eFhNm7cGOsifiJOnDjhrlmzBoChoSEcL0euG+XrX/8tAAUFlUQi41uu9naoqop160x84xLstDRYu9Y8nz598l9pv/zlL7ptbe2X/F13d3esi/eJGBoaorGxEQD3d4ZZn/98DwCzZo3/sXz5Zdcd74vJZDQuwe7oGO2xbRAIhC77u1AodAVbmrgCgQAJCQkADIzMozyRSCBm5erqgqGhmDbNpBC7IyQiV824BDs4/mssYqlAQOfTH0I9toiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiF4sZlJ3EQio91VT85wWBwTL+bTOLj48f0u6stFALXjdnuJ40xB7u1tdVtbW0FIBSfBEDQGSYyHAHADZjBQDTi8uhPazl+5DwAR48ecqOuOfnjgg6R8KD5O+IIxIXMdhgmHB6GQJC4UMLoTofO4wbjIRBHJDyIE4jztgPDQ2Y7rhMkGJdAwB0CYDgSNa8TIBQfT3Soz+wvmGje60SJDIcBCHj1iAwP40YjBL19ByIDDEcd8zwYx//5u7+/bLu0t7ebep446QJEBvtxvLYIxCUQCQ/4PzuBEBGvPE4gSCDOBMaNDhONDOMEggTjRkM0PDSA43jliAsRGeo37ZWQjBv12j0yTCAunmjE1ImoqT+BgL+tC9vOcRx/O47X/qH4RI4cOULU2+bvOnzoIADHjh1zI64z+gs3SnR4CCcY59clOjQAXpkdJ4ATNPuNDPUTjE8CTEqjw2H/PZHwgPf3QYJej+BEzWsv/eowUTfI8eoT7lC/V+7A6LkTjYRxo1HiEpL8uo64sP4ATjAOB2d0f17ZAnHxRC94H44zWrbBPoKhRHAcosNDBIKh0eq7UaLDYXPcQhfUxbsQOYG4C+rfhxMI+sfSjZr3AuQXFgGQm5N9QeNemTEH++TJk+zYtds0Zl8nAJn9tcQVzAag10kxvyNA+/43qQ9lA3Cqfh4D503IE1reJqX8OgC6g9n0t54AIDvaxnDeAoaCUxioecvfZ2F+HucGHHp7e0gtn0/fWXNhSek6TELpQgDOB9Lpbz5KTrALgKGceeaRRMI128kvKgOgeXAKAGndR0goMWVoqzkEQHzhLIJJqZyv32/2mxLlfOZc7+DH01Xz3mXbpaGxEYBnf/gd80IgSCgpDYCB7jaypl3PcF83AJ0n3yG9dA4AiRl59LacAqD/XDOZFQuIS0yh/fho/eOS0kgrrjJlPbydjDJTpt6Wk6TkV5o2Tcuhp+kEg93mApM1bREAwfhE2o7sNCfMzOUM9Z4F4FztfjKmLjDvTc4CoK/lOPU1J4CR0Uf4ojq+u3srAI0tZ+g72+K/3tVwmOypiwglp9N58l3TXk6A9DJTRzcS5szxPQBklM7m/Jk6EtJyAEjOreB8W60pR3oeAKHEZNq9v0/PSQfgQG0VAz19DDbuJSHP1D8xLY/u5uPmOPd2klpwDV0NRwDImbHML1/7UXO+5s5aaWp1vovOmvfJmmrOnfiUTNMmdQeIDA2QUTHPr8MZr+3Simcy2NNOIBgitbiK/vYGf/s9zSfImnY9oSlpdJ56x7w3ECK95FqThegwHcf2+NtJyiowx7uzmZ6Wav9cWLx0KR/XmK8IANHeMy5A/W+fB6Bo4W2EMszVpu29FwHIm7mM//iHrdz+tbsAKCmDxh1PA5BaPJO0qYtNI3fU0bL/dQAKFt1OKC2fzkO/8U9AgIKln4fIIA1vbSateCZhLyAJ6QWklJgLykDrcdoO76Bk2ecACCSZg3Xmg1/hupB33R8DUP/Gj0z55qwlMW8aAN215mTsaTpO/qzV/smZN/9miDM9fNfBV/ibf/gn/t9zOy7ZJl/7i78E4H/fbU6WohUPAqbna3rrWZJzy/0rsxMIkjFjhan/2dO0fPCqec+i2wimFXDu2A76O5v8bRfecLe/rZ7a/aRWmH30NR70y1q4cAOd1W+Tfc0SU/+UXFP/918iEhk27XjdrTTsMscgs+I6ksvmm+00HTaPDfvpSJ7JwmWrzc+9PRfVsa7+NABlRVnUe8cSzAUjqWAmPTVv09V41BzvFfeCY3q1pj3PMCWrGICMGSsZ6qijdf9vAMift46eJhPO7Lk3A3D22Hb6O5tNm9xwNwBv/maAU1ufZuPXZhMqNHUcbK+h9YDZTtnyL0BCOh0HXgPA9UYsSVlF9J81bZkzew0Ap3c9Q2bFfFLKFnj1NiORjuq3KV1xD4TMxb/1nReIS0j2yrae6PkzNOz9JXmzVtHf2ejXPymrkMT8KrpP7fUvNCXL7/Hr37xnM4kZJsyZM1fjeh1i/Z6fUbTgVkJZpQB0Ht9l9lW1cvx77K6Go+6p3T83BfCuimeq3yN3dioAToLppap3/JxzWV+hvd300k7tT5lSYq5IaVMXcbZ2HwDtR3dRvvJeAEIpWTTsfZFAXIik/On+PlsPbiV/zlqKlt7Nqe2Pk+Q1Uvbs2XSc2GtOhlPvU3Hj/QQSTTnqdjxptjkljaJFt9HXYQ5EaoXpyTpPHyM70ZQ1zXst4gY5uetnTF33Z+bkcOKo3foTc0CKpzOUex1w6WAP1JuAJZf+uTmYH7xG4QJzohYu/QK1O54k4A3HylfeR1e9OZnaDm2jzKt/MDWb03ueJxoepHzVff62hwd6qdu12Ww/u4Sg11tMKZ7DsHcoq7c/Tdnyu/1A127f5NU/neLr7wDg+Cv/Tv4sE9rksjm0HzOjgp5WM2IoqFrMke2v4UYvPZltqj5gtlnXRubM1f7rSQXX0Lr/N/R1NFCx+gHTlsMR6naatkspuIZwxGyzq/4A6WVzybnujwCo2f0sBfM+A0DD278w7x3qp3zFPeYYhM3FpfOdH1M8axGhwiWcrfnAHPPaD8iebi6QDfu2UrTwj/yLQ8s+01k0HtjGjA1fM/V/9QcA5M1aRUrZXM4cMUHqbjS9fMXqB3CD8f65k5hRgBtvQt558h2ypl1PwZI7qd3xFDnTR3vXxPwqmve9zsDZZr/+0eFharb/2JxfhdP99jrfVkPzB6ZsOVU30Fr9HgVzzajk4wR6xJiDHe7vJqfqBgB/qBWNhKnd9gQA02/9KgDBxGRSf/093A7Tu2QtvIWkbNNDdpzYy9ma901j3riRUJIXxp1P47pRyhff619xAep3PUPTe7+maOEfMW3tn1P/1s/M6289R1yiGfpXrn2IQFw8p94wJ1NSthlBFM6/mZ7mEzS99zIAVX/8FwAETidQt/MZAEqW3gFAZuUCgglJ1O0c6dUWkDXVhD69fC6J7k8u2y6BUKLXJmaY2NVwlNN7TDlLl91F5Y0badhrRjN1u57x61xx40ZCU8wFpnbHU8QlTqF82X0MdJ+5oP6b/eFhcnYJDXtfAKBo4QbSimea9o5PomHvi2RWmF44zRsGZk1dSF97vWmLBTeTWnANAK0H36S7yfSupUvNKCcxPY/4KW/5c+/fNdDiDXNve4hQao7/euO7v2K4r4vKtX9KuL/Hq8uTpBaY45137Up/ilD/1nNEwkP+VKFi9QM0eMczrdSMvnJnLmegqw2A3qPPAXAmeBORlDn01u/hzDEzJSpZfDtTsk1vN9jVRs2bj1Gx+kEACuavN+2SMIVTbz4GQPHCDaYN8yppPfCG3y6Va//Ur8uprT8lIc1cHAvmriPcZ6Z29bufJRIeJHfmCipv3Ej97mdHM9HXRXxyOoXzbvLrX7fzKTIrzVQve/oSuk6bUVHr/i0UeBf8tOKZuNEIp7b+lE/KmIOdM32JU7/7ORdMTwKm5w4lmIANnDNDqKxpSwjkOXSfNj1qwprr6Dpt5rLn6g5QucY0ZiAunhrvopCSP5WU/ApOvfHfZmjlqVj9APW7n+X0np9TuuxOyleY4Vnd7s3gmguAEwhS8+bjpBaaEzf32pXevvbTcXyvPypoPWjmiflz1hKXaIZZDb99AfCCUlRFMM4snjW+92vKl5t9hc814bTtv2y7RKeYk2FkiFa2/As0vv1LwAS2YtV9lCz5rNnf3hcZHlkAi0+ibsdTpo3SsimcfzPnz9TR/MFr/raLF99Of4fppZPzKilb/nkATr/1PHlz1gCQXjqLkutv9y8eRdffBsBgdzuN7/4KgOm3fJWm914BIBLup3zFvV55vPrPW0vOvFv9BSmGL15ES07wFj+TM2l+79ejdR8aoHzV/Qx0tfn7L1xwM5EhszhVu32T35NVrtlI3Y6niAybRarcquWUecfz/BkTtHB/N6e9aV75YhOCoq5rqNu9lcHyViq80UzTu7/2L2R5s28kLiGZU94Iq8I73rkzVxAImgWtkeFw26FtDJxtoXLtn5n9eeGt2/0suTNX+AuVtdueuKDcD1G782kiQ/0Uzl9/Uc968o3/dtOLryUSHqR+txlZ5VQtJ6PcXOTPnnqfTq8jK191P2eOmTn/QE87eTNX+ot7vW21LkBKXsWYe27dxxax0MceywOc3PJjFyA5v5L8OWsBqH713wAoXHQHP3i6hFVzawEocl4mlGWGh3mzbyQyaObe9bufIz7ZzDEyKuaTkj+Vc3X7OOOtZAKU3vB5EtNyaXz7FwwP9FK+6n7/dyND7J6m4xQu3EBa0QwAOqrN6uS52n1klM8hrdjsu/EdM4+LT8miaKGZ5/WfNaOM03t+TsHctf4wtr+ziaZ3XwIgp2IW3/ynH/Hjn1x62PTVr38DgL+6zey/YP7NpHhD0ZZ9r9PX2ehf/QPBkD9yOFvzAflz1wGQWTGf7qZjtB7cRmrhNH/b2dOuJzTFtFHdzqf90cdQ71nqvMWwnOlLyZy6kMGeDlMXr8ebkl1CbpWZh7Ye3Eq43yw8Zk1dRHrpLAAGvBXujgOv0DiUxto7zTpBX2/3RXV842f/BcA1GRESi2b7r+fOXElvWw0t+14nJX8qYKZpSRf0kD0t1QBUrn4QAkFqvOFxSl6FX/+abY8DEIxLIN+bdyekmrsqWx57ge4zLay/dyWpxXMuqL+ZTmVfs5isaYv8IW/boTe9c+cuEtPzATj6y++Z86xsDgXz1/vHvdE7xil5U0ktnEZyboXZxuEd9HiLgRVrNhIMJVK740lCSWmULL79ogzV7njKdaMRf70gMaPAX8M4V3+QzMoF/r5HbnfV7nyKpKxiCufdBOD35HkzV4w5n2N+47n6g25SdgkA8d7JVrvtceK9OVdGqQlFw7u/4mc7N3D3V8yBLktroO63ZviWN/tGuhuPAZCcU+ZX+tSbj5GSW25+33TM32fLvi2ULr2DpKxiWj54jT5vlbPyxof8e8MtB35DuK+LdG+eds5bnCtbfjfn22r94ejIQkr97mcJeA08spI+1NtJ3c5n/FslmVOvY7DHzA07DrzG33//cf5r8yuXbJdHHjJTh+//q7mw1e1+1j9h00uu5cyRnXR7J0n5qvv81dYzR3fT12GGoFlTr6ejei8li/+EofPn/G037H3RXwfoqj/IwLlWr/4b/SF93fZNpJXOInemt9ruBbh+93P+bZ3+s40ULTR3B5ref9m/uzCyUBUd7GXb09/j1of/wbRH5OKh+KHjNQBUJPfTcnSP/3ruzBWcrdtP/pw1/v3d2u2b/PqnFc+ko/ptADpPvUfFqvv8W4Gn3vgJU3LMPLlw/k0OQM2OJ90pmWaNJCvfTPH+8//WUrziLtbN2kZHXZ0px+oHiXpD+tptm0gtqSLv2lWAuQUFZrg+Mq0b9jqTtkPbyZ253F/Bz5p2PQApuWXOyS0/ctO8Oy05VcvoPGk6iM7qdyhfdR+hKelm7eSC9cWy5Z93AOrfes6N86akyfmVdHp1rlj9wOhi6dFd/jQhNCXdu1CY9ZaSxX/ysTvcMW/gbO0+d+S+6MgJkZCa7c8tyrw56UB3Cz/520f5zIO3AjD9+oX+gtC5mn0ke/dfe5pPkDfTzIeDCUnUbn+ShIw8ihbc4u+zt62Gpnd/RdGiPyYlr5KWfVsA6Dvb6M8Tg6EE2o/vwfXm3IGAOcGmZBeTlFVEr7fyG/Q+jJKUWejPgYcHzYdFylfew/BAH7XbzZw/o2wOudeOXj3/8sGb3e89MTr3vdDDt5uLwY9+Ya7SF/am2dOXkDV1kX+gO06+S/lK03bxyZl0nnrPL0dcwhRCiamkFo3eFehtq/VHDjM2fJ22w9v9thtZLAoEgtRse5zknHIACuZ/xi9303uvuABOMEhqodlucm45ze+/4h0rc/GqvPFBjh8/wby5pkccHBq6qI4nD5lyTp11nX+LCqCvo4HEzCKi4X5/wchcJL36z7iBrKnXeefPB7QffYsyr/4JKVn+Cn7ljQ/6ZW7et8UFyCo2t8lef7GBQHIRG+6ZdUH9q6lYbUZvgWCImm1PMCWryKu/WTzrbTnpX9RHFk7Pt5+mu+EIyXkVAIT7zgGQM32pA3Di1f90AdKKq8ibfePIec+ZIzspX3EPCWk5/vEAcxGtWPWAA9By4A0XIDEjn3CfWUhzAgGyrzG3d8/V7qPNG42WL/8CCWk51O/x1hNuuCt2wQboajjiepUAoGzZXSRlFjgADXuedQFKln3B+f53z7gzk83q4crPLie5aIED0H58jzuysBKXmELnSXPCl6+8j/jkDKd259PuyGo3QMn1tzl9nY1uw29fIH/uOtJLrnUA2g7vcLu9K3P5irsJJaY4tbs2uwBJ3spmd9MxCubfTGrBVAfg2Mv/5gIUL7rNX6Ro/uA1F2DgXBuVa0ZPruotP3bTvIDlzVrtfP0rX3L/7Qc/umSbPPI/vw7A39xvLlJlK+91wv29LpgV4ozyeeRWLXPMSbLfPXN4h/d395CYluNd8X/mJmUU0NVw2O9FALKmXuf0dTa75iQ8S3rJLAfgzLG33HO1ZkGvfPX9xCelOjXbnnABf2W36LpbnPNn6s2n4Yb6afZuAxUuuIW0oukOQOvBN12A6PkzdCZXcf0Sc9ejv+/8RXXc+qP/ZY7lPd8klJrjt1PjOy+58SlZdDcc8Vfpc69d4YT7e0z9tz/pLyTlzlzudDUccVv2m4tz2Q1f8M+d03tfdAFKl3zWGegyn5U4X7cNgD3H5tL07hY2/tUqEvPmjda/ztyCM6OAVKdm+yZTf28IX3Tdrc759tOmft4nzVILpzutB990o1Fzf3+o20xfQlPSKVp4q1+vk2/8t+tfKOetc7oaj7ktH7xG6Q13MSWryP+7ln2vu/1nW6hcs9F/rWbHU272dHO/ve3AG6SP1H/GMmckP637f0PJsruYklVoLgrecSiYs2b872MDfrD6Opt+74bnyO0egEEnh7zrvXllwugHTuJTc/z5VygpxRlZDRz5eGTFynudrsZjF217SlaxM9jb6Y7cTgDIm7XK6Wk5Zf7O+yDxSM+QVmhO2oGuNjcyPNrzjIwoohe8VrjgZgeg+3f2ec1NDzs9LSdHX/NOhEvyyp7p3cYZqdvI8+7m0e1kVszzw3bhB6DTy+aQXlzlDPV1uUPeXHm0/ubgnz9T578ht+oGv/4jbTfS63U3HR/dsDddSSuucvq72ryTfPSjk/neidR3ptY9c7rtsh/KTrrG9F4jHxUdkVJwDeklM81+m0/4bw4lpY7Wv2n09fSSa/2wXbitkU9qXViftApzkTlfXUSgIh/iRs+ji+rvjdQqVz/we/VPzik1bTeyT8wHV9KKZlxUka6GoxdVfNq6P3cuPCfSi6ucvo5GF+fiteeC+eudnuZqF2Cor8sFczcitWCav/2eluqL6g/Q19nsOoHRIoxMmSa8f/5n1z1y1PyLdVk+Cf/jka+4mNnV7/175JFH3EceeWTS1/Po0WNuYmKim5iY+Ht1PHTkqHvoyNGY1HHzM6775FN2nEdX07j8113g32a2goP955X7IQds5COxMeHYdS5dLbqPLWIhBVvEQgq2iIUUbBELKdgiFlKwRSykYItYSMEWsZCCLWIhBVvEQgq2iIUUbBELKdgiFlKwRSykYItYSMEWsZCCLWIhBVvEQgq2iIUUbBELKdgiFlKwRSykYItYSMEWsZCCLWIhBVvEQgq2iIUUbBELKdgiFlKwRSykYItYSMEWsZCCLWIhBVsmlWjU/JMPFxfrAohciYQEiNNZ+5HURDKp3HxzrEswOSjYMqkkJztOrMswGWiOLWIhBVus0NPjuj09rhvrckwUGorLhPPssyagaWlwyy0fPfR+/HHX3b8/1qWeWBRsmXC6u81jMDj62qlTJuzJyZCfb8J+7Jh57YknYONGzb0vpKG4iIUUbBELaSguE04oZB4TE2HXrtHhNkB8vBmCV1U5TjhsXrv/fvjWt2Jd6olFwZYJJ+CNI194Ae680zz/2781c+ieHtf99rfNa3PmaF59ORqKy4TT32/+lZbChg2Os2HDaIBTUx1ncBB6e3Vr68Mo2DJhzZ176deHh2NdsolPQ3GZcCoqzGNy8qV/P38+pKRoGP5hFGyZcNav//DQfvnLCvVH0VBcxEIKtoiFFGyZVBoaXLexUSviH0VzbJlUdu7UqvgfQj22iIUUbJlUtB7+h1GwZVJxHIX7D6Fgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWUrBFLKRgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWUrBFLKRgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWUrBFLKRgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWUrBFLKRgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWUrBFLKRgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWUrBFLKRgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWUrBFLKRgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWUrBFLKRgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWUrBFLKRgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWUrBFLKRgi1hoXIIdjYLrmn8iNjtx4oT7pS99yW1ra3Pb2touOuOff/55d9u2be62bds+NAmbNm1yN23a9LHSEjcelQ2FwHHGY08isTU0NMS5c+d44oknfu93HR0dxMfHX/a9I4Hfvn07AK2trW5+fv6YkjMuwb73XsjIGI89icRWOBxm/fr1pKenA6aX/tznPucAxMXFEQwGL/vebdu2AbBu3ToAXnrppTGXY1yCXVys/lo+Pfr7+3nkkUccgO9+97vusWPHXIB9+/bhXmY++vTTT7vt7e0ATJs2DTDBHnlvVVXVFWVIi2ciFhqXHlvk0yQSifjP77//fp588kkAQqEQs2fP/r2/P3/+vPvVr36VgoICAJ566ikA6urqeP3118dUBgVb5BMUiUQYHBz0fy4qKnL27NnjAnzzm9/k29/+NgAtLS3uwYMHATN0Ly0t5Rvf+AYAubm5DsAvfvELt6mpCTDhB9iyZQuf/exnP3JYftWC/YMfmMnEV76i+bV8emRlZXHttdde9NqyZcscgEcffdTN8FaR+/v76e3tBSAxMZH58+f7gR5RXl5OSkoKAMPDwwB0d3f/QeW4asGur7/454YGE/SSEgV9souPj93STFwcXDDSnXAqKysve35/8YtfvKJzf/78+WPOylULdlqaeWxocN1f/hIefdT8/PLLrrthg8I9mdXW9o08uq4bHZd9jpwxW7f2k5gYpq2t1YWJeRo5jnPZ1e+P+x7HcYhGoyQkJACQkZFxyUa4asH2pgZs2gR33gkzZphD8x//4bpbtpga3HSTAj4Z/cu/mOFYWhpEo0Pjuu/h4RD5+W00Nx8iGg1+/A1OQuFwmOLi4g/9m6sW7K4u8/i1r42GGiA/H1paYt008nF861vXADBr1qxx/5iw44DjuASD6z7VH1F2vEg99NBDl/z9VQt2SYl5rKq6uFe+YMFQJqm0NNNTpqaGNOKaoK5asKdOvfTrhYUK92Q3PPwp7ioniasW7IcfvvT8ec0azatFrjZ9pFTEQvrkmVipr6/PBdi7dy/ARZ8Gm+gCAdPfLl26lLS0tIn7n22KjLeRT2o1NzcD0NfXF+si/cFG/tPOcDg85m1oKC5ioXHpsdvaXDcvT4tmMn7GOoS1xbj02I8/DocPu+7hw5/mjxSIjJ9x6bHDYf2PDEXG07gEOxDQ/8xQJpfNmze7p06dAvjQ/wHhRwmHw5R4H8N84IEHxi0FWhUXuYQVK1awcOFCYPT201hEo1ESExPHvfwKtsglFBcXT+oxpm53iVhIwRaxkIbiImOwY8cOd9u2bf5/Fw0wdepU7rvvvgkxhFePLWIh9dgiYzBnzhxKS0svei0Wq9+Xo2CLjEFmZuaEGHJfjobiIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUsFBfrAtgmGo3GugifCNd1iUQil/xdYqIb6+LJR1Cwx2BwcBCAQODiAU80GsVxnFgX7xMRDAYvqt9IvRzH5ec/TwDguedcNxyOTflcF+K8s3fJEqiosKThPyEK9hgUFxfz2GOPUVFRcdHrg4ODlJSUAPDDH/4w1sX8WMrKynj11Vf9ny8M9p49PQCkpJiAxYLrwjvvmOfTpsW0qSYkzbFFLKQeewwyMzNZv349hYWF1g7/kpKSLlu3t9/e6gIsXhzb4e/3v2/GC1lZsSzFxKRgj0EkEqGnpyfWxYiZvr6JMdDr6zOPl1nj+1RTsGXS0nLZ5U2MS6+IfKIUbBELKdgiFlKwRSykYItYSMEWsZCCLWIhBVvEQgq2iIUUbBELKdgiFlKwRSykYItYSMEWsZCCLWIhBVvEQgq2iIUUbBELKdgiFlKwRSykYItYSMEWsZCCLWIhBVvEQvrCAJm0Rr7pM1ZfDDiRKdgyaeXlmcdQKNYlmXgUbJm0HnzQPCYn68t+fpfm2CIWUo8tk5Z66stTjy1iIQVbJp3ubq2DfxQFWyaV1lbX/eEPY12KiU/BlklleBh6emJdiolPwRaxkIItk4rjQDAY61JMfAq2iIUUbJl0dPf6oynYMqm4LgwMxLoUE58+eSaTSkYGRKPwj//ouomJ5rXhYUhJMc8feACys9WnK9gyqYx8jLSlxXVH4uu6EPDGngq1oWDLpFRQoAB/GM2xRSykHlsmrYMHzWfGS0shPV09+IUUbJm0nn/ePN57b6xLMvFoKC5iIfXYMmnFx5vHgLqn36MmEbGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1iIQVbxEIKtoiFFGwRCynYIhZSsEUspGCLWEjBFrGQgi1ioXH5ih/XBZu+C9FxIPAp/l6ZiXIso9FYl2DiGpdgJyVBJBLrqn5yotEw4XA41sWImcgEOZgpKeZxolxoJpKr3iQ9Pa77r/8Kw8Pm57Q004NPNiMnTzQKO3c+zpw5h8jOLvRe+/R0HXFxUaqr7wBg+vRpxPL61t5uHu+6CxYtUrwvdNV77NRUx2lsdN2RYE/GUF+ovx+OH7+Hhx9uYhyuixOO40TZu7cSgCVLYns8g0HzmJ4e61YRK/z1X0/2y9PHs3u36+7e/elug4nu07sCNEbnz7vup2jkfUnhMDEdgstHU7BFLKRgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWUrBFLKRgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWUrBFLKRgi1hIwRaxkIItYiEFW8RCCraIhRRsEQsp2CIWGpcv5ZNPxqZNrnvihHleWAh33GGe5+fre6vkYuqxRSykHnsSmTEDXnrJPP/MZ2DzZvO8rs51y8vVa8so9dhjEKsILV7sODNmmICvXGm+dzwpCd59d3zL4bqT/1tTbace+wolJzvOl77kum+84brnzpnXAldweYxEIDPTPF+37souEefOue53vjP688jXyF7phWbzZteNj7+y94x8EaG+snZyUI8tYiH12GOwerUZAnd0mJ+vZFgaiVxZD381RKOmHFf6HjD1zsqKbfnloynYY/DQQ7GZZWdkOM7f/d3oZWQknFf6fd333quFNttpKD6J7N3rutXVUF0Nu3bBwID5t3RprEsmE4167Enk2DGYOdM8P3gQ7r7bPM/LUw8sIiIiIiIiIiIiIiKfVv8fGhH9PvsEJ6wAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDctMTdUMTc6NDc6MDUrMDA6MDDlxNO9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA3LTE3VDE3OjQ3OjA1KzAwOjAwlJlrAQAAAABJRU5ErkJggg==';
    const base64String1 = 'data:image/png;base64,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';
    const base64String2 = 'data:image/png;base64,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';

    const [amostra,setAmostra]=useState();
    const [comentario,setComentario]=useState();

    const [localDaObra,setLocalDaObra]=useState();
    const [cliente,setCliente]=useState();
    const [sonda,setSonda]=useState();

    const [idFuro,setIdFuro]=useState();
    const [trecho,setTrecho]=useState();
    const [trecho2, setTrecho2] = useState();
    const [rtCampo,setRtCampo]=useState();
    const [data1,setData1]=useState(new Date());
    const [data2, setData2] = useState(new Date());
    const [ensaio,setEnsaio]=useState();
    const [cuoucs,setCuoucs]=useState();
    const [q, setQ] = useState();
    const [h,setH]=useState();
    const [hd1, setHD1] = useState();
    const [h1,setH1]=useState();
    const [l,setL]=useState();
    const [d,setD]=useState();
    const [lh,setLh]=useState();
    const [hr,setHr]=useState();
    const [lr,setLr]=useState();

    const [tempo0,setTempo0]=useState();
    const [tempo1,setTempo1]=useState();
    const [tempo2,setTempo2]=useState();
    const [tempo3,setTempo3]=useState();
    const [tempo4,setTempo4]=useState();
    const [tempo5,setTempo5]=useState();
    const [tempo6,setTempo6]=useState();
    const [tempo7,setTempo7]=useState();
    const [tempo8,setTempo8]=useState();
    const [tempo9,setTempo9]=useState();
    const [tempo10,setTempo10]=useState();
    const [tempo11,setTempo11]=useState();
    const [tempo12,setTempo12]=useState();
    const [tempo13,setTempo13]=useState();
    const [tempo14,setTempo14]=useState();
    const [tempo15,setTempo15]=useState();
    const [tempo16,setTempo16]=useState();
    const [tempo17,setTempo17]=useState();
    const [tempo18,setTempo18]=useState();
    const [tempo19,setTempo19]=useState();

     
    const [leitura0,setLeitura0]=useState();
    const [leitura1,setLeitura1]=useState();
    const [leitura2,setLeitura2]=useState();
    const [leitura3,setLeitura3]=useState();
    const [leitura4,setLeitura4]=useState();
    const [leitura5,setLeitura5]=useState();
    const [leitura6,setLeitura6]=useState();
    const [leitura7,setLeitura7]=useState();
    const [leitura8,setLeitura8]=useState();
    const [leitura9,setLeitura9]=useState();
    const [leitura10,setLeitura10]=useState();
    const [leitura11,setLeitura11]=useState();
    const [leitura12,setLeitura12]=useState();
    const [leitura13,setLeitura13]=useState();
    const [leitura14,setLeitura14]=useState();
    const [leitura15,setLeitura15]=useState();
    const [leitura16,setLeitura16]=useState();
    const [leitura17,setLeitura17]=useState();
    const [leitura18,setLeitura18]=useState();
    const [leitura19,setLeitura19]=useState();
    
    const [kabge,setKabge]=useState();
    const [klefranc,setKlefranc]=useState();
    const [condicaoEnsaio,setCondicaoEnsaio]=useState();
    const [leitorVazao ,setLeitorVazao]=useState();


    const [ae12, setAe12] = useState(0.00001);
    const [ah12, setAH12] = useState();
    const [ag12, setAG12] = useState();

    const [sigma, setSigma] = useState("");
    const [sigma1, setSigma1] = useState("");

    const [result, setResult] = useState(0);
    const [result1, setResult1] = useState();
    const [result2, setResult2] = useState();
    const [result3, setResult3] = useState();

    const [na, setNA] = useState(0);


    const [acimanade, setAcimaNADE] = useState();
    const [abaixona, setAbaixoNA] = useState();
    const [datePicker, setDatePicker] = useState(false);

    const [horaInicio, setHoraInicio] = useState();
    const [horaTermino, setHoraTermino] = useState();

    const [operador, setOperador] = useState();
    const [assinaturaFiscal, setAssinaturaFiscal] = useState();

    const [tempoSaturacao, setTempoSaturacao] = useState();

    const calculoPotenciaAF3 = (hr) => {
        const constante1 = -3 * Math.pow(10, -18);
        const constante2 = 3 * Math.pow(10, -14);
        const constante3 = -1 * Math.pow(10, -10);
        const constante4 = 3 * Math.pow(10, -7);
        const constante5 = -0.0002;
        const constante6 = 0.3099;
        const constante7 = 13.565;


        const resultado = (
            constante1 * Math.pow(hr, 6) +
            constante2 * Math.pow(hr, 5) +
            constante3 * Math.pow(hr, 4) +
            constante4 * Math.pow(hr, 3) +
            constante5 * Math.pow(hr, 2) +
            constante6 * hr +
            constante7
        );

        return resultado;
    };
    const resultadoCalculoAF3 = calculoPotenciaAF3(h);


    const calculoPotenciaAF4 = (hr) => {
        const constante1 = 0.0000000000000000007;
        const constante2 = -0.000000000000009;
        const constante3 = 0.00000000004;
        const constante4 = -0.00000007;
        const constante5 = 0.00003;

        const resultado = (
            constante1 * Math.pow(hr, 6) +
            constante2 * Math.pow(hr, 5) +
            constante3 * Math.pow(hr, 4) +
            constante4 * Math.pow(hr, 3) +
            constante5 * Math.pow(hr, 2) +
            hr
        );

        return resultado;
    };

    const resultadoCalculoAF4 = calculoPotenciaAF4(hr);

    const calculoPotenciaAF5 = (hr) => {
        const constante1 = -0.000000000000000001;
        const constante2 = 0.00000000000003;
        const constante3 = -0.0000000002;
        const constante4 = 0.0000004;
        const constante5 = -0.0005;
        const constante6 = 0.7095;
        const constante7 = 15.475;

        const resultado = (
            constante1 * Math.pow(hr, 6) +
            constante2 * Math.pow(hr, 5) +
            constante3 * Math.pow(hr, 4) +
            constante4 * Math.pow(hr, 3) +
            constante5 * Math.pow(hr, 2) +
            constante6 * hr +
            constante7
        );

        return resultado;
    };

    const resultadoCalculoAF5 = calculoPotenciaAF5(hr);

    const calculoPotenciaAF6 = (hr) => {
        const constante1 = -0.000000000000000003;
        const constante2 = 0.00000000000003;
        const constante3 = -0.0000000001;
        const constante4 = 0.0000002;
        const constante5 = -0.0003;
        const constante6 = 0.8262;
        const constante7 = 21.58;

        const resultado = (
            constante1 * Math.pow(hr, 6) +
            constante2 * Math.pow(hr, 5) +
            constante3 * Math.pow(hr, 4) +
            constante4 * Math.pow(hr, 3) +
            constante5 * Math.pow(hr, 2) +
            constante6 * hr +
            constante7
        );

        return resultado;
    };
    const resultadoCalculoAF6 = calculoPotenciaAF6(hr);

    const calculoPotenciaAF7 = (hr) => {
        const constante1 = -0.00000000000000002;
        const constante2 = 0.0000000000002;
        const constante3 = -0.0000000008;
        const constante4 = 0.000001;
        const constante5 = -0.0011;
        const constante6 = 1.1958;
        const constante7 = 15.313;

        const resultado = (
            constante1 * Math.pow(hr, 6) +
            constante2 * Math.pow(hr, 5) +
            constante3 * Math.pow(hr, 4) +
            constante4 * Math.pow(hr, 3) +
            constante5 * Math.pow(hr, 2) +
            constante6 * hr +
            constante7
        );

        return resultado;
    };

    const resultadoCalculoAF7 = calculoPotenciaAF7(hr);


    const calculoAE23 = (lh) => {
        if (lh <= 0.1) {
            return resultadoCalculoAF3;
        } else if (lh <= 0.2) {
            return resultadoCalculoAF4;
        } else if (lh <= 0.3) {
            return resultadoCalculoAF5;
        } else if (lh <= 0.4) {
            return resultadoCalculoAF6;
        } else {
            return resultadoCalculoAF7;
        }

    };



    function sigmatempo() {
        const result = parseFloat(tempo0) + parseFloat(tempo1) + parseFloat(tempo2) + parseFloat(tempo3) + parseFloat(tempo4) + parseFloat(tempo5) + parseFloat(tempo6) + parseFloat(tempo7);
        setSigma1(sigmaleitura)
        return result.toString()
    }

    function sigmaleitura() {

        const result = parseFloat(leitura0) + parseFloat(leitura1) + parseFloat(leitura2) + parseFloat(leitura3) + parseFloat(leitura4) + parseFloat(leitura5) + parseFloat(leitura6) + parseFloat(leitura7);
        setQ(qcm)
        return result.toString()
    }

    function qcm() {

        const result = parseFloat(sigma1) / parseFloat(sigma)
        return result.toFixed(3)
    }
    function hcm(h) {

        const result = (trecho2 * 100 + 100)
        return result.toString();
    }
    function hlcm(h) {

        const result = (h - (l / 2))
        return result.toString();
    }
    function hldcm(h) {

        const result = (parseFloat(na) + 100)
        return result.toString();

    }
    function hldcm1(h) {

        const result = 100
        return result.toString();
    }
    function Ld() {
        const result = ((trecho2 - trecho) * 100)
        return result.toString();
    }
    function LH() {

        const result = parseFloat(l) / parseFloat(h)
        return result.toFixed(3);
    }
    function HR() {

        const result = parseFloat(h) / (parseFloat(d) / 2)
        return result.toString();
    }
    function LR() {

        const result = parseFloat(l) / (parseFloat(d) / 2)
        return result.toString();
    }
    function calculoPotenciaAF9(lr) {
        const constante1 = -0.00000000000000001;
        const constante2 = 0.0000000000001;
        const constante3 = 0.0000000005;
        const constante4 = 0.0000009;
        const constante5 = 0.0008;
        const constante6 = 1.1594;
        const constante7 = 12.442;

        const resultado = (
            constante1 * Math.pow(lr, 6) + constante2 * Math.pow(lr, 5) - constante3 * Math.pow(lr, 4) + constante4 * Math.pow(lr, 3) - constante5 * Math.pow(lr, 2) + constante6 * lr + constante7
        );

        return resultado.toFixed(0);
    };
    const KABGE = (q, h, cuoucs, d, hd1) => {

        if (acimanade === 'x') {
            const result = (parseFloat(q) / parseFloat(h)) * (1 / (cuoucs * (d / 2)))
            return result.toPrecision(3);
        } else {
            const result = (parseFloat(q) / parseFloat(hd1)) * (1 / (cuoucs * (d / 2)))
            return result.toPrecision(3);
        }

    };


    function KLEFRAN(q, h, l, d) {

        if (l === " ") {
            return "-";
        }

        else {
            const pi = Math.PI;
            const result = q / (2 * pi * l * (parseFloat(h) + (l / 2))) * Math.log((2 * l) / d);

            return result.toPrecision(3);

        }
    };




    function H1KLEFRAN(lefranc, sigma1, ae12, ah12) {

        if (sigma1 === " ") {
            return "-";
        } else {
            const result = lefranc < ae12 ? 'sim' : 0;
            ah12 = result;
    
            console.log('ah------->', ah12);
    
            if (result === 'sim') {
                return 'H1';
            } else {
                return ''; 
            }
        }
    };
    
  

    function H1KABGE(kabge, cuoucs, ae12, ag12) {

        if (cuoucs === " ") {
            return "-";
        } else {
            const result = kabge < ae12 ? 'sim' : 0;
            ag12 = result;
    
            console.log('ag------->', ag12);
    
            if (result === 'sim') {
                return 'H1';
            } else {
                return ''; 
            }
        }
    }


    const calculoCuouCS = (h1, h2) => {

        console.log(h1, h2)
        if (h1 >= h2) {
            console.log('1')
            setCuoucs(calculoPotenciaAF9(lr));
        } else {
            console.log('2')
            setCuoucs(calculoAE23(lh).toFixed(0));
        }
    };


    const Calcular = (h1, h2) => {

        setH(hcm)

        setSigma(sigmatempo)
        if (na > 0) {
            setHD1(hldcm)
        } else {
            setHD1(hldcm1)
        }
        setL(Ld)
        setLh(LH)
        setHr(HR)
        setLr(LR)
        calculoCuouCS(h1, h2)
        setKabge(KABGE(q, h, cuoucs, d, hd1))
        setResult2(KLEFRAN(q, h, l, d))

        setResult(H1KLEFRAN(result2, sigma1, ae12, ah12))
        setResult1(H1KABGE(kabge, cuoucs, ae12, ag12))

        console.log(q, h, l, d)
        console.log("Resultado kfranc-->", result2, "Resultado kabge-->", kabge)
    };

/*     useEffect(() => {

        setData1(moment(data2).format("DD/MM/YYYY"));

        Calcular(h, hd1)


    }); */


    useEffect(()=>{Calcular(h, hd1) });


    function Confirmacao() {alert("Salvo com sucesso!")};

    async function SalvarInfiltracao() {
      const obj = {  idFuro,  trecho,  trecho2,  rtCampo,  data1,  ensaio,  cuoucs,  h,  h1,  l,  d,  lh,  hr,  lr,  tempo0,  tempo1,  tempo2,  tempo3,  tempo4,
              tempo5,  tempo6,  tempo7,   tempo8 ,  tempo9,  tempo10,  tempo11,  tempo12,  tempo13,  tempo14,  tempo15,  tempo16
              ,  tempo17,  tempo18, leitura0,  leitura1,  leitura2,  leitura3,  leitura4, leitura5,  leitura6,  leitura7, leitura8, leitura9, leitura10, leitura11
              , leitura12, leitura13, leitura14, leitura15, leitura16, leitura17, leitura18
            ,  amostra };
        
        const res = await axios.post(Conexao.api+ 'SalvarinfiltracaoSoloSondagem.php', obj);
    
        if (res.data.success === true) {        Confirmacao();      }
        else{}           
      };
      

      async function Att(){
        const obj = {  idFuro,  trecho,  trecho2,  rtCampo,  data1,  ensaio,  cuoucs,  h,  h1,  l,  d,  lh,  hr,  lr,  tempo0,  tempo1,  tempo2,  tempo3,  tempo4,
            tempo5,  tempo6,  tempo7,   tempo8 ,  tempo9,  tempo10,  tempo11,  tempo12,  tempo13,  tempo14,  tempo15,  tempo16
            ,  tempo17,  tempo18, leitura0,  leitura1,  leitura2,  leitura3,  leitura4, leitura5,  leitura6,  leitura7, leitura8, leitura9, leitura10, leitura11
            , leitura12, leitura13, leitura14, leitura15, leitura16, leitura17, leitura18
          ,  amostra,kabge,klefranc,assinaturaFiscal, tempoSaturacao,operador,horaTermino,horaInicio,localDaObra,cliente
          ,sonda,comentario,condicaoEnsaio,leitorVazao };
    
      const res = await axios.post(Conexao.api+ 'UpdateInfiltracaoSoloSondagemWEB.php', obj);
  
      if (res.data.success === true) {   Confirmacao(); }
      else{} 
      };




      async function AtualizaOuCria(){
        const res = await axios.get(Conexao.api + 'BuscarInfiltracaoSoloSondagemWEB.php? amostra=' + amostra  );  
        if (res.data.success === false) { SalvarInfiltracao(); } 
        else { Att(); }  

      };


      function NaoEncontrado(){ alert("Não encontrado!")};

      async function BuscarInfiltracao() { 
        const res = await axios.get(Conexao.api + 'BuscarInfiltracaoSoloSondagemWEB.php? amostra=' + amostra  );  
        if (res.data.success === false) { NaoEncontrado();
    //console.log("nada")   
        } else {
            setIdFuro(res.data.idFuro)
            setComentario(res.data.comentario)
            setTrecho(res.data.trecho)
            setTrecho2(res.data.trecho2)
            setRtCampo(res.data.rtCampo)
            setLocalDaObra(res.data.localDaObra)
            setCliente(res.data.cliente)
            setSonda(res.data.sonda)
            setData1(res.data.data1)
            setData2(res.data.data2) 
            setEnsaio(res.data.ensaio)            
            setCondicaoEnsaio(res.data.condicaoEnsaio)
            setLeitorVazao(res.data.leitorVazao)
            setOperador(res.data.operador)
            setAssinaturaFiscal(res.data.assinaturaFiscal)
            setHoraInicio(res.data.horaInicio)
            setHoraTermino(res.data.horaTermino)
            setTempoSaturacao(res.data.tempoDeSaturacao)

            setKabge(res.data.kabge)
            setKlefranc(res.data.klefranc)
         
            setCuoucs(res.data.cuoucs)
            setQ(res.data.q)
            setH(res.data.h) 
            setHD1(res.data.hd1)
            setH1(res.data.h1)
            setL(res.data.l)
            setD(res.data.d)
            setLh(res.data.lh)
            setHr(res.data.hr)
            setLr(res.data.lr)

            setTempo0(res.data.tempo)
            setTempo1(res.data.tempo1)
            setTempo2(res.data.tempo2)
            setTempo3(res.data.tempo3)
            setTempo4(res.data.tempo4)
            setTempo5(res.data.tempo5)
            setTempo6(res.data.tempo6)
            setTempo7(res.data.tempo7)
            setTempo8(res.data.tempo8)
            setTempo9(res.data.tempo9)
            setTempo10(res.data.tempo10)
            setTempo11(res.data.tempo11)
            setTempo12(res.data.tempo12)
            setTempo13(res.data.tempo13)
            setTempo14(res.data.tempo14)
            setTempo15(res.data.tempo15)
            setTempo16(res.data.tempo16)
            setTempo17(res.data.tempo17)
            setTempo18(res.data.tempo18)
            setLeitura0(res.data.leitura)
            setLeitura1(res.data.leitura1)
            setLeitura2(res.data.leitura2)
            setLeitura3(res.data.leitura3)
            setLeitura4(res.data.leitura4)
            setLeitura5(res.data.leitura5)
            setLeitura6(res.data.leitura6)
            setLeitura7(res.data.leitura7)
            setLeitura8(res.data.leitura8)
            setLeitura9(res.data.leitura9)
            setLeitura10(res.data.leitura10)
            setLeitura11(res.data.leitura11)
            setLeitura12(res.data.leitura12)
            setLeitura13(res.data.leitura13)
            setLeitura14(res.data.leitura14)
            setLeitura15(res.data.leitura15)
            setLeitura16(res.data.leitura16)
            setLeitura17(res.data.leitura17)
            setLeitura18(res.data.leitura18)
        }  
      };


      function Limpar (){

        setIdFuro('')
        setComentario('')
        setTrecho('')
        setTrecho2('')
        setRtCampo('')
        setLocalDaObra('')
        setCliente('')
        setSonda('')
        setData1('')
        setData2('') 
        setEnsaio('')            
        setCondicaoEnsaio('')
        setLeitorVazao('')
        setOperador('')
        setAssinaturaFiscal('')
        setHoraInicio('')
        setHoraTermino('')
        setTempoSaturacao('')

        setKabge('')
        setKlefranc('')
     
        setCuoucs('')
        setQ('')
        setH('') 
        setHD1('')
        setH1('')
        setL('')
        setD('')
        setLh('')
        setHr('')
        setLr('')

        setTempo0('')
        setTempo1('')
        setTempo2('')
        setTempo3('')
        setTempo4('')
        setTempo5('')
        setTempo6('')
        setTempo7('')
        setTempo8('')
        setTempo9('')
        setTempo10('')
        setTempo11('')
        setTempo12('')
        setTempo13('')
        setTempo14('')
        setTempo15('')
        setTempo16('')
        setTempo17('')
        setTempo18('')
        setLeitura0('')
        setLeitura1('')
        setLeitura2('')
        setLeitura3('')
        setLeitura4('')
        setLeitura5('')
        setLeitura6('')
        setLeitura7('')
        setLeitura8('')
        setLeitura9('')
        setLeitura10('')
        setLeitura11('')
        setLeitura12('')
        setLeitura13('')
        setLeitura14('')
        setLeitura15('')
        setLeitura16('')
        setLeitura17('')
        setLeitura18('')
      };

    

      async function GerarPDF() {
 
        const pdfDoc = await PDFDocument.create()
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
        const arialFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
        const arialBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      
        const page = pdfDoc.addPage()
        const { width, height } = page.getSize()
        const fontSize = 30
    
// CABEÇALHO


        // LOGO GEOCONTROLE
        const imageUrl = 'data:image/png;base64,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';
        const imageBytes = await fetch(imageUrl).then(response => response.arrayBuffer());
        
        
        
        // Inserir a imagem na posição desejada
        const image = await pdfDoc.embedPng(imageBytes);
        const imageDims = image.scale(0.2); // Ajuste o fator de escala conforme necessário
        
        const xPosition = 27; // Ajuste a posição X da imagem
        const yPosition = 795; // Ajuste a posição Y da imagem


        const imageUrl3 = 'data:image/png;base64,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';
        const imageBytes3 = await fetch(imageUrl3).then(response => response.arrayBuffer());     
  
        const image3 = await pdfDoc.embedPng(imageBytes3);
        const imageDims3 = image3.scale(0.2); 


        const imageUrl4 = 'data:image/png;base64,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';
        const imageBytes4 = await fetch(imageUrl4).then(response => response.arrayBuffer());
        const image4 = await pdfDoc.embedPng(imageBytes4);


        const imageUrl5 = 'data:image/png;base64,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';
        const imageBytes5 = await fetch(imageUrl5).then(response => response.arrayBuffer());
        const image5 = await pdfDoc.embedPng(imageBytes5);
        
  
        
        
        
        page.drawImage(image, {
            x: xPosition,
            y: yPosition,
            width: imageDims.width,
            height: imageDims.height,
        });
        
        
        
        const imageUrl2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArMAAABACAIAAACGHGjSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMzowODozMSAxMzoxMDo0Ob1mDjYAAAEtSURBVHhe7d3BCQJBEEXBXVMxHg3WjcdYWpCR50XwKlZd5ofw6MvsM7MBADyd1gsAoAwAgHfKAACIMgAAogwAgCgDACDKAACIMgAAogwAgCgDACDKAACIMgAA8tWPSufbZS0A4Gfdr8dan7kZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAEGUAAEQZAABRBgBAlAEAkH1m1gQA/p6bAQAQZQAARBkAAFEGAECUAQAQZQAARBkAAFEGAECUAQAQZQAARBkAAFEGAECUAQAQZQAAvGzbA0nODHURHqEnAAAAAElFTkSuQmCC';
        const imageBytes2 = await fetch(imageUrl2).then(response => response.arrayBuffer());
        
        // Inserir a imagem na posição desejada
        const image2 = await pdfDoc.embedPng(imageBytes2);
        const imageDims2 = image2.scale(0.5); // Ajuste o fator de escala conforme necessário
        
        const xPosition2 = 369; // Ajuste a posição X da imagem
        const yPosition2 = 792; // Ajuste a posição Y da imagem
        
        page.drawImage(image2, {
            x: xPosition2,
            y: yPosition2,
            width: 200,
            height: 35,
        });
        
        page.drawText('AMOSTRA:     '+amostra, {
          x: 435,
          y: 807,
          size: 12, // Tamanho da fonte
          font: arialFont,
          color: rgb(1, 1, 1), // Cor do texto (branco)
        });
        
  /*       page.drawRectangle({
          x: 30,
          y: 675,
          width: 535,
          height: 120,
          borderColor: rgb(0, 0, 0), // Cor da borda (preto)
          borderWidth: 1, // Largura da borda
          color: rgb(1,1,1), // Cor de preenchimento (verde) -->(34,139,34)
        }); */
        
        
        
        
        page.drawRectangle({
          x: 30,
          y: 765,
          width: 425,
          height: 30,
          borderColor: rgb(0, 0, 0), // Cor da borda (preto)
          borderWidth: 1, // Largura da borda
          color: rgb(1,1,1), 
        });
        
        page.drawText('RELATÓRIO:', {
          x: 32,
          y: 784,
          size: 9, // Tamanho da fonte
          font: arialFont,
          color: rgb(0, 0, 0), // Cor do texto (branco)
        });
        
        page.drawText('INFILTRAÇÃO EM SOLO', {
          x: 185,
          y: 774,
          size: 12, // Tamanho da fonte
          font: arialBoldFont,
          color: rgb(0, 0, 0), // Cor do texto (branco)
        });
        
        
        
         //CODIGO
         page.drawRectangle({
          x: 455,
          y: 765,
          width: 110,
          height: 30,
          borderColor: rgb(0, 0, 0), // Cor da borda (preto)
          borderWidth: 1, // Largura da borda
          color: rgb(1,1,1), 
        });
        
      page.drawText('PP-GG-009-01', {
          x: 480,
          y: 775,
          size: 9, // Tamanho da fonte
          font: arialFont,
          color: rgb(0, 0, 0), // Cor do texto (branco)
        }); 
        
        
        

        
        
         //CLIENTE
         page.drawRectangle({
          x: 280,
          y: 735,
          width: 175,
          height: 30,
          borderColor: rgb(0, 0, 0), // Cor da borda (preto)
          borderWidth: 1, // Largura da borda
          color: rgb(1,1,1), 
        });
         page.drawText('CLIENTE:', {
          x: 282,
          y: 754,
          size: 9, // Tamanho da fonte
          font: arialFont,
          color: rgb(0, 0, 0), // Cor do texto (branco)
        });
      page.drawText(cliente, {
          x: 322,
          y: 740,
          size: 9, // Tamanho da fonte
          font: arialFont,
          color: rgb(0, 0, 0), // Cor do texto (branco)
        }); 
        
         //SONDA
         page.drawRectangle({
          x: 455,
          y: 735,
          width: 110,
          height: 30,
          borderColor: rgb(0, 0, 0), // Cor da borda (preto)
          borderWidth: 1, // Largura da borda
          color: rgb(1,1,1), 
        });
        page.drawText('SONDA:', {
          x: 457,
          y: 754,
          size: 9, // Tamanho da fonte
          font: arialFont,
          color: rgb(0, 0, 0), // Cor do texto (branco)
        }); 
        page.drawText(sonda, {
          x: 470,
          y: 740,
          size: 9, // Tamanho da fonte
          font: arialFont,
          color: rgb(0, 0, 0), // Cor do texto (branco)
        }); 
        
        
 
        
        
         //DATA DA ABERTURA
         page.drawRectangle({
          x: 30,
          y: 735,
          width: 250,
          height: 30,
          borderColor: rgb(0, 0, 0), // Cor da borda (preto)
          borderWidth: 1, // Largura da borda
          color: rgb(1,1,1), 
        });
        page.drawText('LOCAL DA OBRA:', {
          x: 32,
          y: 754,
          size: 9, // Tamanho da fonte
          font: arialFont,
          color: rgb(0, 0, 0), // Cor do texto (branco)
        });
        
        page.drawText(localDaObra, {
          x: 110,
          y: 740,
          size: 9, // Tamanho da fonte
          font: arialFont,
          color: rgb(0, 0, 0), // Cor do texto (branco)
        }); 
        
        

        
        
        
         //DESCRIÇÃO
        
        page.drawRectangle({
          x: 30,
          y: 685,
          width: 535,
          height: 50,
          borderColor: rgb(0, 0, 0), // Cor da borda (preto)
          borderWidth: 1, // Largura da borda
          color: rgb(1,1,1), 
        }); 
         page.drawText('DESCRIÇÃO:', {
          x: 32,
          y: 724,
          size: 9, // Tamanho da fonte
          font: arialFont,
          color: rgb(0, 0, 0), // Cor do texto (branco)
        });
         
        //777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

        
//RODAPÉ

page.drawRectangle({
    x: 30,
    y: 110,
    width: 535,
    height: 25,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
  page.drawText('OBSERVAÇÃO:', {
    x: 32,
    y: 125,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });

  page.drawText(comentario || "", {
    x: 102,
    y: 115,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  
  
  
  page.drawRectangle({
    x: 30,
    y: 68,
    width: 179,
    height: 42,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
  
/*   page.drawText('ABERTURA', {
    x: 95,
    y: 100,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  
  page.drawText('Responsável:', {
    x: 32,
    y: 85,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  }); */
  
  /* page.drawText(responsavel1 || "", {
    x: 91,
    y: 85,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  }); */
  
 /*  if (assinaturaAbertura && assinaturaAbertura.trim() !== '') {
    const imageUrl4 = assinaturaAbertura;
    const imageBytes4 = await fetch(imageUrl4).then(response => response.arrayBuffer());
  
    // Inserir a imagem na posição desejada
    const image4 = await pdfDoc.embedPng(imageBytes4);
    const imageDims4 = image4.scale(0.1); // Ajuste o fator de escala conforme necessário 
  
    const rectWidth = 120; // Largura do retângulo
    const rectHeight = 20; // Altura do retângulo
  
    // Calcule a proporção de escala
    const scaleX = rectWidth / imageDims4.width;
    const scaleY = rectHeight / imageDims4.height;
  
    // Use a menor proporção de escala para garantir que a imagem caiba completamente dentro do retângulo
    const scale = Math.min(scaleX, scaleY);
  
    // Calcule a largura e altura da imagem após o dimensionamento
    const scaledWidth = imageDims4.width * scale;
    const scaledHeight = imageDims4.height * scale;
  
    // Calcule as coordenadas x e y para posicionar a imagem centralizada no retângulo
    const xPosition4 = 70 + (rectWidth - scaledWidth) / 2;
    const yPosition4 = 78 + (rectHeight - scaledHeight) / 2;
  
    // Desenhe a imagem no PDF apenas se houver uma imagem válida
    page.drawImage(image4, {
      x: xPosition4,
      y: yPosition4,
      width: scaledWidth,
      height: scaledHeight,
      color: rgb(0, 0, 0), // Cor do texto (branco)
    })
  };
  
  
  page.drawText('Data:', {
    x: 32,
    y: 72,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  
  page.drawText(moment(dataAtual).format('DD/MM/YYYY') || "", {
    x: 58,
    y: 72,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  }); */
  
  
  //88888888888888888888888888888
  
  page.drawRectangle({
    x: 208,
    y: 68,
    width: 179,
    height: 42,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
  
/*   page.drawText('EXECUÇÃO', {
    x: 275,
    y: 100,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  
  page.drawText('Responsável:', {
    x: 210,
    y: 85,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  }); */
  
  /* page.drawText(executadaPor || "", {
    x: 268,
    y: 85,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  }); */
  
/*   page.drawText('Data:', {
    x: 210,
    y: 72,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  
   page.drawText(moment(dataExecutadaPor).format('DD/MM/YYYY') || "", {
    x: 235,
    y: 72,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  }); */
   
  
  
 /*  if (assinaturaExecucao && assinaturaExecucao.trim() !== '') {
    const imageUrl5 = assinaturaExecucao;
    const imageBytes5 = await fetch(imageUrl5).then(response => response.arrayBuffer());
  
    // Inserir a imagem na posição desejada
    const image5 = await pdfDoc.embedPng(imageBytes5);
    const imageDims5 = image5.scale(0.1); // Ajuste o fator de escala conforme necessário 
  
    const rectWidth = 120; // Largura do retângulo
    const rectHeight = 20; // Altura do retângulo
  
    // Calcule a proporção de escala
    const scaleX = rectWidth / imageDims5.width;
    const scaleY = rectHeight / imageDims5.height;
  
    // Use a menor proporção de escala para garantir que a imagem caiba completamente dentro do retângulo
    const scale = Math.min(scaleX, scaleY);
  
    // Calcule a largura e altura da imagem após o dimensionamento
    const scaledWidth = imageDims5.width * scale;
    const scaledHeight = imageDims5.height * scale;
  
    // Calcule as coordenadas x e y para posicionar a imagem centralizada no retângulo
     const xPosition5 = 248 + (rectWidth - scaledWidth) / 2;
    const yPosition5 = 78 + (rectHeight - scaledHeight) / 2; 
  
  
    // Desenhe a imagem no PDF apenas se houver uma imagem válida
    page.drawImage(image5, {
      x: xPosition5,
      y: yPosition5,
      width: scaledWidth,
      height: scaledHeight,
      color: rgb(0, 0, 0), // Cor do texto (branco)
    })
  }; */
  
  //8888888888888888888888888888888888
  page.drawRectangle({
    x: 386,
    y: 68,
    width: 179,
    height: 42,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
  
/*   page.drawText('ENCERRAMENTO', {
    x: 436,
    y: 100,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  
  page.drawText('Responsável:', {
    x: 388,
    y: 85,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  }); */
  
  
  
  
/*   if (assinaturaEncerramento && assinaturaEncerramento.trim() !== '') {
    const imageUrl3 = assinaturaEncerramento;
    const imageBytes3 = await fetch(imageUrl3).then(response => response.arrayBuffer());
  
    
  
    // Inserir a imagem na posição desejada
    const image3 = await pdfDoc.embedPng(imageBytes3);
    const imageDims3 = image3.scale(0.1); // Ajuste o fator de escala conforme necessário 
  
    const rectWidth = 120; // Largura do retângulo
    const rectHeight = 20; // Altura do retângulo
  
    // Calcule a proporção de escala
    const scaleX = rectWidth / imageDims3.width;
    const scaleY = rectHeight / imageDims3.height;
  
    // Use a menor proporção de escala para garantir que a imagem caiba completamente dentro do retângulo
    const scale = Math.min(scaleX, scaleY);
  
    // Calcule a largura e altura da imagem após o dimensionamento
    const scaledWidth = imageDims3.width * scale;
    const scaledHeight = imageDims3.height * scale;
  
    // Calcule as coordenadas x e y para posicionar a imagem centralizada no retângulo
   
    const xPosition3 = 428 + (rectWidth - scaledWidth) / 2; 
    const yPosition3 = 78 + (rectHeight - scaledHeight) / 2;
  
    // Desenhe a imagem no PDF apenas se houver uma imagem válida
    page.drawImage(image3, {
      x: xPosition3,
      y: yPosition3,
      width: scaledWidth,
      height: scaledHeight,
      color: rgb(0, 0, 0), // Cor do texto (branco)
    });
  
  } */
  
   
  //assinaturaEncerramento
  
/*   page.drawText('Data:', {
    x: 388,
    y: 72,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  }); */
  
/*   page.drawText(moment(encerraData).format('DD/MM/YYYY') || "", {
    x: 415,
    y: 72,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  }); */
  
  
  
  /* page.drawRectangle({
    x: 30,
    y: 67,
    width: 535,
    height: 13,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });
   */
  
  page.drawText('Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole ', {
    x: 58,
    y: 57,
    size: 10, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  
  
  
  
  page.drawImage(image2, {
    x: 20,
    y: 5,
    width: 556,
    height: 40,
  });
  page.drawText('www.geocontrole.com - e-mail: mail.br@geocontrole.com ', {
    x: 145,
    y: 24,
    size: 12, // Tamanho da fonte
    font: arialFont,
    color: rgb(1, 1, 1), // Cor do texto (branco)
  });
  
  page.drawText('Av.Canadá,Nº 159 - Jardim Canadá - Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011 ', {
    x: 45,
    y: 42,
    size: 10, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), // Cor do texto (branco)
  });
  
  
  //999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999


  // CORPO DO ENSAIO


  page.drawRectangle({
    x: 30,
    y: 620,
    width: 535,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });

  //furo
/*   page.drawRectangle({
    x: 30,
    y: 620,
    width: 80,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  }); */

  page.drawText('Furo:', {
    x: 35,
    y: 630,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

  page.drawText(idFuro || "", {
    x: 57,
    y: 630,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

//trecho
/*   page.drawRectangle({
    x: 110,
    y: 620,
    width: 155,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  }); */

  page.drawText('Trecho ensaiado (m):', {
    x: 115,
    y: 630,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

  page.drawText(trecho+' a '+trecho2  || "", {
    x: 202,
    y: 630,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });


  //Data
/*   page.drawRectangle({
    x: 265,
    y: 620,
    width: 85,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  }); */

  page.drawText('Data:', {
    x: 270,
    y: 630,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

  page.drawText(moment(data1).format('DD/MM/YYYY')  || "", {
    x: 296,
    y: 630,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });


  //Rt de Campo
/*   page.drawRectangle({
    x: 350,
    y: 620,
    width: 115,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  }); */

  page.drawText('RT de campo:', {
    x: 355,
    y: 630,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

  page.drawText(rtCampo  || "", {
    x: 415,
    y: 630,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });


  //Ensaio
/*   page.drawRectangle({
    x: 465,
    y: 620,
    width: 100,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  }); */

  page.drawText('Ensaio:', {
    x: 470,
    y: 630,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

  page.drawText(ensaio  || "", {
    x: 502,
    y: 630,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

//777777777777777777777777777777777777777777

  page.drawRectangle({
    x: 30,
    y: 590,
    width: 535,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });


/*   page.drawRectangle({
    x: 30,
    y: 590,
    width: 267,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  }); */

  page.drawText('Condição do ensaio:', {
    x: 35,
    y: 600,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

  page.drawText(condicaoEnsaio || "", {
    x: 120,
    y: 600,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

/*   page.drawRectangle({
    x: 297,
    y: 590,
    width: 268,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  }); */

  page.drawText('Leitor de vazão:', {
    x: 402,
    y: 600,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

  page.drawText(leitorVazao || "", {
    x: 470,
    y: 600,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

/*   page.drawRectangle({
    x: 460,
    y: 590,
    width: 75,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  }); */

/*   page.drawText('Nome do operador:', {
    x: 415,
    y: 600,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  }); */




//7777777777777777777777777777777777777777777

  page.drawRectangle({
    x: 30,
    y: 560,
    width: 535,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  });

/*   page.drawRectangle({
    x: 30,
    y: 560,
    width: 170,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  }); */

  page.drawText('Hora início do ensaio:', {
    x: 35,
    y: 570,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

  page.drawText(horaInicio || "", {
    x: 123,
    y: 570,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });



/*   page.drawRectangle({
    x: 200,
    y: 560,
    width: 170,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  }); */

  page.drawText('Hora início do término:', {
    x: 205,
    y: 570,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

  page.drawText(horaTermino || "", {
    x: 298,
    y: 570,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

/*   page.drawRectangle({
    x: 300,
    y: 560,
    width: 135,
    height: 30,
    borderColor: rgb(0, 0, 0), // Cor da borda (preto)
    borderWidth: 1, // Largura da borda
    color: rgb(1,1,1), 
  }); */

  page.drawText('Tempo de saturação (min):', {
    x: 375,
    y: 570,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });
  page.drawText(tempoSaturacao || "", {
    x: 485,
    y: 570,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

//888888888888888888888888888888888888888888888888888888888888888888



page.drawRectangle({
  x: 30,
  y: 160,
  width: 535,
  height: 400,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});



page.drawRectangle({
  x: 30,
  y: 540,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
/* page.drawText('', {
  x: 35,
  y: 570,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); */


page.drawRectangle({
  x: 50,
  y: 540,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('Tempo (s)', {
  x: 57,
  y: 546,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 540,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText('Leitura (ml)', {
  x: 112,
  y: 546,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 520,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('1', {
  x: 37.5,
  y: 525,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 520,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo0 || "", {
  x: 60.5,
  y: 525,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 520,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura0 || "", {
  x: 117.5,
  y: 525,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});


//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 500,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('2', {
  x: 38,
  y: 505,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 500,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo1 || "", {
  x: 60.5,
  y: 505,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 500,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura1 || "", {
  x: 117.5,
  y: 505,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 480,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('3', {
  x: 38,
  y: 485,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 480,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo2 || "", {
  x: 60.5,
  y: 485,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 480,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura2 || "", {
  x: 117.5,
  y: 485,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 460,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('4', {
  x: 38,
  y: 465,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 460,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo3 || "", {
  x: 60.5,
  y: 465,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 460,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura3 || "", {
  x: 117.5,
  y: 465,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 440,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('5', {
  x: 38,
  y: 445,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 440,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo4 || "", {
  x: 60.5,
  y: 445,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 440,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura4 || "", {
  x: 117.5,
  y: 445,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 420,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('6', {
  x: 38,
  y: 425,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 420,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo5 || "", {
  x: 60.5,
  y: 425,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 420,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura5 || "", {
  x: 117.5,
  y: 425,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 400,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('7', {
  x: 38,
  y: 405,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 400,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo6 || "", {
  x: 60.5,
  y: 405,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 400,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura6 || "", {
  x: 117.5,
  y: 405,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 380,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('8', {
  x: 38,
  y: 385,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 380,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo7 || "", {
  x: 60.5,
  y: 385,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 380,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura7 || "", {
  x: 117.5,
  y: 385,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});


//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 360,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('9', {
  x: 38,
  y: 365,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 360,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo8 || "", {
  x: 60.5,
  y: 365,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 360,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura8 || "", {
  x: 117.5,
  y: 365,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 340,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('10', {
  x: 35,
  y: 345,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 340,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo9 || "", {
  x: 60.5,
  y: 345,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 340,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura9 || "", {
  x: 117.5,
  y: 345,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 320,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('11', {
  x: 35,
  y: 325,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 320,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo10 || "", {
  x: 60.5,
  y: 325,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 320,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura10 || "", {
  x: 117.5,
  y: 325,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});


//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 300,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('12', {
  x: 35,
  y: 305,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 300,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo11 || "", {
  x: 60.5,
  y: 305,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 300,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura11 || "", {
  x: 117.5,
  y: 305,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 280,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('13', {
  x: 35,
  y: 285,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 280,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo12 || "", {
  x: 60.5,
  y: 285,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 280,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura12 || "", {
  x: 117.5,
  y: 285,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 260,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('14', {
  x: 35,
  y: 265,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 260,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo13 || "", {
  x: 60.5,
  y: 265,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 260,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura13 || "", {
  x: 117.5,
  y: 265,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 240,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('15', {
  x: 35,
  y: 245,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 240,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo14 || "", {
  x: 60.5,
  y: 245,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 240,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura14 || "", {
  x: 117.5,
  y: 245,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});


//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 220,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('16', {
  x: 35,
  y: 225,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 220,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo15 || "", {
  x: 60.5,
  y: 225,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 220,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura15 || "", {
  x: 117.5,
  y: 225,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 200,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('17', {
  x: 35,
  y: 205,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 200,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo16 || "", {
  x: 60.5,
  y: 205,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 200,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura16 || "", {
  x: 117.5,
  y: 205,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});


//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 180,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('18', {
  x: 35,
  y: 185,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 180,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo17 || "", {
  x: 60.5,
  y: 185,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 180,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura17 || "", {
  x: 117.5,
  y: 185,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

//78787878787878787878787878787878787878787878787878787878787

page.drawRectangle({
  x: 30,
  y: 160,
  width: 20,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
 page.drawText('19', {
  x: 35,
  y: 165,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawRectangle({
  x: 50,
  y: 160,
  width: 55,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(tempo18 || "", {
  x: 60.5,
  y: 165,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});

page.drawRectangle({
  x: 105,
  y: 160,
  width: 60,
  height: 20,
  borderColor: rgb(0, 0, 0), // Cor da borda (preto)
  borderWidth: 1, // Largura da borda
  color: rgb(1,1,1), 
});
page.drawText(leitura18 || "", {
  x: 117.5,
  y: 165,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
});


page.drawImage(image3 || "", {
  x: 280,
  y: 280,
  width: 160,
  height: 270,
});


page.drawText('            Comprimento do topo\n do revestimento até  a profundidade\n                  final do ensaio', {
  x: 170,
  y: 495,
  size: 7.5, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 


page.drawText(h || "", {
  x: 220,
  y: 420,
  size: 9, // Tamanho da fonte
  font: arialFont,
  color: rgb(0, 0, 0), 
}); 

page.drawLine({start: { x: 255, y: 423 },
  end: { x: 287, y: 423 },
  thickness: 1,
  color: rgb(0, 0, 0),
  opacity: 0.55,})




  page.drawText('Diâmetro do furo', {
    x: 202,
    y: 298,
    size: 7.5, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  }); 

  page.drawText(d || "", {
    x: 220,
    y: 285,
    size: 9, // Tamanho da fonte
    font: arialFont,
    color: rgb(0, 0, 0), 
  });

  page.drawLine({start: { x: 255, y: 287 },
    end: { x: 311, y: 287 },
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.55,})



 /*    page.drawText(' Obs: se o furo estiver seco, escrever "SECO"\n                nas duas caixas de profundidade\n                                    do NA abaixo:       ', {
      x: 400,
      y: 550,
      size: 7.5, // Tamanho da fonte
      font: arialFont,
      color: rgb(0, 0, 0), 
    });  */


    page.drawText('Comprimeto do topo do revestimeto até o NA', {
      x: 405,
      y: 493,
      size: 7.5, // Tamanho da fonte
      font: arialFont,
      color: rgb(0, 0, 0), 
    }); 

    page.drawText(h1 || "", {
      x: 460,
      y: 480,
      size: 9, // Tamanho da fonte
      font: arialFont,
      color: rgb(0, 0, 0), 
    }); 

    page.drawLine({start: { x: 408, y: 483 },
      end: { x: 455, y: 483 },
      thickness: 1,
      color: rgb(0, 0, 0),
      opacity: 0.55,})


      page.drawText('Profundidade do NA em relação ao terreno', {
        x: 410,
        y: 439,
        size: 7.5, // Tamanho da fonte
        font: arialFont,
        color: rgb(0, 0, 0), 
      }); 

      page.drawText(na || "", {
        x: 470,
        y: 424,
        size: 9, // Tamanho da fonte
        font: arialFont,
        color: rgb(0, 0, 0), 
      });

      page.drawLine({start: { x: 441, y: 426 },
        end: { x: 467, y: 426 },
        thickness: 1,
        color: rgb(0, 0, 0),
        opacity: 0.55,})

        page.drawText('Comprimento do trecho ensaiado', {
          x: 434,
          y: 336,
          size: 7.5, // Tamanho da fonte
          font: arialFont,
          color: rgb(0, 0, 0), 
        }); 


        page.drawText(l || "", {
          x: 470,
          y: 324,
          size: 9, // Tamanho da fonte
          font: arialFont,
          color: rgb(0, 0, 0), 
        });

      page.drawLine({start: { x: 408, y: 327 },
          end: { x: 460, y: 327 },
          thickness: 1,
          color: rgb(0, 0, 0),
          opacity: 0.55,})





          page.drawRectangle({
            x: 165,
            y: 160,
            width: 220,
            height: 100,
            borderColor: rgb(0, 0, 0), // Cor da borda (preto)
            borderWidth: 1, // Largura da borda
            color: rgb(1,1,1), 
          });

          page.drawText('LEFRANC:', {
            x: 220,
            y: 245,
            size: 9, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });

          page.drawText(klefranc || "", {
            x: 270,
            y: 245,
            size: 9, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });

          page.drawImage(image4 || "", {
            x: 220,
            y: 200,
            width: 93,
            height: 40,
          });


          page.drawText('Onde,', {
            x: 170,
            y: 203,
            size: 7.5, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });

          page.drawText('Q – vazão (cm³/s);', {
            x: 170,
            y: 193,
            size: 7.5, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });
          page.drawText('L – comprimento da área molhada (cm);', {
            x: 170,
            y: 183,
            size: 7.5, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });
          page.drawText('hc – comp. do topo do tubo a média do trecho ensaiado (cm);', {
            x: 170,
            y: 173,
            size: 7.5, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });

          page.drawText('D – diâmetro do furo (cm).', {
            x: 170,
            y: 164,
            size: 7.5, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });




          page.drawRectangle({
            x: 385,
            y: 160,
            width: 180,
            height: 100,
            borderColor: rgb(0, 0, 0), // Cor da borda (preto)
            borderWidth: 1, // Largura da borda
            color: rgb(1,1,1), 
          });


          page.drawText('ABGE:', {
            x: 440,
            y: 245,
            size: 9, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });

          page.drawText(kabge || "", {
            x: 475,
            y: 245,
            size: 9, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });

          page.drawImage(image5 || "", {
            x: 437,
            y: 210,
            width: 82,
            height: 34,
          });


          page.drawText('Onde,', {
            x: 390,
            y: 203,
            size: 7.5, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });

          page.drawText('Q – vazão (cm³/s);', {
            x: 390,
            y: 193,
            size: 7.5, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });
          page.drawText('h - altura total (cm);', {
            x: 390,
            y: 183,
            size: 7.5, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });
          page.drawText('Cu - relações geométricas - Ábaco', {
            x: 390,
            y: 173,
            size: 7.5, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });

          page.drawText('r - raio do furo (cm)', {
            x: 390,
            y: 164,
            size: 7.5, // Tamanho da fonte
            font: arialFont,
            color: rgb(0, 0, 0), 
          });




        
       
        const pdfBytes = await pdfDoc.save()
        download(pdfBytes, "InfiltracaoSoloSondagem.pdf", "application/pdf");
    console.log(pdfBytes)
      }


  

    return <body>

    <Navbar />
    
     <br/>
    <div className='titulolaboratorio container-fluid '>
      <h1 className='texttitulo'>Infiltração em solo</h1>
    </div>   
    <br/> 

    <div className="  d-flex justify-content-center  align-items-center  mt-2" > 
           <div class="col-auto  ">
                <h3    >Amostra</h3>   
            </div>
            <div class="col-sm-2 ms-3  ">
                <input placeholder='Digite o número da amostra' onChange={(e)=>setAmostra(e.target.value)& Limpar()} value={amostra}  class="borda form-control  text-center "  ></input>     
            </div>                  
            <div class="col-auto ms-2">
                 <button  onClick={()=>BuscarInfiltracao()}  class="btnlogin "  >BUSCAR</button>           
            </div>
     </div> 
    
     <br/>


<body className='container align-items-center justify-content-center p-2 d-flex '>
    <div className="col-4 ">
        <div className="d-flex align-items-center ">
            <div className="col-3">
                <h6>Local da obra</h6>
            </div>
            <div className="col-9">
                <input onChange={(e)=>setLocalDaObra(e.target.value)} value={localDaObra} className='borda form-control text-center  '></input>
            </div>        
        </div>
    </div>
    <div className="col-1"></div>
    <div className="col-3 ">
        <div className="d-flex align-items-center ">
            <div className="col-3">
                <h6>Cliente</h6>
            </div>
            <div className="col-9">
                <input onChange={(e)=>setCliente(e.target.value)} value={cliente} className='borda form-control text-center '></input>
            </div>       
        </div>
    </div>
    <div className="col-1"></div>
    <div className="col-3 ">
        <div className="d-flex align-items-center ">
            <div className="col-3">
                <h6>Sonda</h6>
            </div>
            <div className="col-9">
                <input onChange={(e)=>setSonda(e.target.value)} value={sonda} className=' borda form-control text-center '></input>
            </div>         
        </div>
    </div>
</body>

<br/>

<body className='container-xl text-center d-flex mt-3'>
      <div class="col  align-items-center justify-content-center  ">
    <div class="row d-flex align-items-center justify-content-center ">
        <div className='col'>
            <h6> Furo</h6>
            <input onChange={(e)=>setIdFuro(e.target.value)} value={idFuro}  className='borda form-control text-center ' ></input>
        </div>
        <div className='col-4'>
            <h6> Trecho ensaiado (m)</h6>
            <div className="d-flex align-items-center">
                <input onChange={(e)=>setTrecho(e.target.value)} value={trecho} className='borda form-control text-center me-2' ></input>
                <h6>a</h6>
                <input onChange={(e)=>setTrecho2(e.target.value)} value={trecho2} className='ms-2 borda form-control text-center ' ></input>
            </div>           
        </div>
        <div className='col'>
            <h6>Data</h6>
            <input onChange={(e)=>setData1(e.target.value)} value={moment(data1).format("DD/MM/YYYY")}  type="date" className='borda form-control text-center ' ></input>
        </div>
        <div className='col'>
            <h6> RT de campo</h6>
            <input  onChange={(e)=>setRtCampo(e.target.value)} value={rtCampo}  className='borda form-control text-center ' ></input>
        </div>
        <div className='col'>
            <h6> Ensaio n°</h6>
            <input onChange={(e)=>setEnsaio(e.target.value)} value={ensaio}  className='borda form-control text-center '></input>
        </div>
        </div>
        </div>
      </body>


      <body className='container-xl text-center d-flex mt-5'>
      <div class="col  align-items-center justify-content-center  ">
    <div class="row d-flex align-items-center justify-content-center ">

        <div className='col-3 text-center'>
            <h6> Condição do ensaio</h6>
            <select onChange={(e)=>setCondicaoEnsaio(e.target.value)} value={condicaoEnsaio}  className='borda form-select text-center   '>
                <option value='Selecione'>Selecione</option>
                <option value='Acima do NA (seco)'>Acima do NA (SECO)</option>
                <option value='Abaixo do NA'>Abaixo do NA</option>
            </select>
        </div>
        <div className="col-1"></div>
        <div className='col-4 '>
            <h6> Leitor de vazão</h6>
            <select onChange={(e)=>setLeitorVazao(e.target.value)} value={leitorVazao}  className='borda form-select text-center   '>
                <option value='Selecione'>Selecione</option>
                <option value='Proveta'>Proveta</option>
                <option value='Hidrometro'>Hidrometro</option>
            </select>           
        </div>
        <div className="col-1"></div>
        <div className='col-3  align-items-center'>
            <h6>Nome do operador</h6>
            <div className="d-flex align-items-center">                
                   <input onChange={(e)=>setOperador(e.target.value)} value={operador}  className=' borda form-control text-center   ' ></input>                                      
            </div>  
        </div>
        </div>
        </div>
      </body>


      <body className='container-xl text-center d-flex mt-5'>
      <div class="col  align-items-center justify-content-center  ">
    <div class="row d-flex align-items-center justify-content-center ">
        <div className='col-4 text-center'>           
           <div className="d-flex align-items-center"> 
                <div className="col-6 text-start">
                   <h6>Hora início do ensaio</h6> 
                </div>               
                <div className="col-6">
                   <input type='time' onChange={(e)=>setHoraInicio(e.target.value)} value={horaInicio} className=' borda form-control text-center  ' ></input>  
                </div>         
            </div>
            <div className="d-flex align-items-center mt-2"> 
                <div className="col-6 text-start">
                   <h6>Hora término do ensaio </h6> 
                </div>               
                <div className="col-6">
                   <input type='time' onChange={(e)=>setHoraTermino(e.target.value)} value={horaTermino} className=' borda form-control text-center  ' ></input>  
                </div>         
            </div> 
        </div>

        <div className='col-4 '>
            <h6> Tempo de saturação (min)</h6>           
            <input onChange={(e)=>setTempoSaturacao(e.target.value)} value={tempoSaturacao} className=' borda form-control text-center   ' ></input>            
        </div>
        <div className="col-1"></div>
        <div className='col-3  align-items-center'>
            <h6>Assinatura do fiscal</h6>
            <div className="d-flex align-items-center">                   
                   <input onChange={(e)=>setAssinaturaFiscal(e.target.value)} value={assinaturaFiscal} className=' borda form-control text-center   ' ></input>                                    
            </div>         
        </div>
        </div>
        </div>
      </body>


      <body className='container text-center d-flex mt-5'>
      <div class="col  align-items-center justify-content-center  ">
    <div class="row d-flex align-items-center justify-content-center ">

        <div className='col-1 text-center'>
            <h6> Tempo (s)</h6>
            <input onChange={(e)=>setTempo0(e.target.value)} value={tempo0} className=' borda form-control text-center '  ></input>  
            <input onChange={(e)=>setTempo1(e.target.value)} value={tempo1} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setTempo2(e.target.value)} value={tempo2} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setTempo3(e.target.value)} value={tempo3} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setTempo4(e.target.value)} value={tempo4} className=' borda form-control text-center ' ></input>    
            <input onChange={(e)=>setTempo5(e.target.value)} value={tempo5} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setTempo6(e.target.value)} value={tempo6} className=' borda form-control text-center ' ></input>  
            <input onChange={(e)=>setTempo7(e.target.value)} value={tempo7} className=' borda form-control text-center ' ></input>  
            <input onChange={(e)=>setTempo8(e.target.value)} value={tempo8} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setTempo9(e.target.value)} value={tempo9} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setTempo10(e.target.value)} value={tempo10} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setTempo11(e.target.value)} value={tempo11} className=' borda form-control text-center ' ></input>    
            <input onChange={(e)=>setTempo12(e.target.value)} value={tempo12} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setTempo13(e.target.value)} value={tempo13} className=' borda form-control text-center ' ></input> 
            <input onChange={(e)=>setTempo14(e.target.value)} value={tempo14} className=' borda form-control text-center ' ></input>  
            <input onChange={(e)=>setTempo15(e.target.value)} value={tempo15} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setTempo16(e.target.value)} value={tempo16} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setTempo17(e.target.value)} value={tempo17} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setTempo18(e.target.value)} value={tempo18} className=' borda form-control text-center ' ></input>     
        </div>
      
        <div className='col-1 '>
            <h6> Leitura (ml)</h6>
            <input onChange={(e)=>setLeitura0(e.target.value)} value={leitura0} className=' borda form-control text-center ' ></input>  
            <input onChange={(e)=>setLeitura1(e.target.value)} value={leitura1} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setLeitura2(e.target.value)} value={leitura2} className=' borda form-control text-center ' ></input>    
            <input onChange={(e)=>setLeitura3(e.target.value)} value={leitura3} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setLeitura4(e.target.value)} value={leitura4} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setLeitura5(e.target.value)} value={leitura5} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setLeitura6(e.target.value)} value={leitura6} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setLeitura7(e.target.value)} value={leitura7} className=' borda form-control text-center ' ></input>  
            <input onChange={(e)=>setLeitura8(e.target.value)} value={leitura8} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setLeitura9(e.target.value)} value={leitura9} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setLeitura10(e.target.value)} value={leitura10} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setLeitura11(e.target.value)} value={leitura11} className=' borda form-control text-center ' ></input>    
            <input onChange={(e)=>setLeitura12(e.target.value)} value={leitura12} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setLeitura13(e.target.value)} value={leitura13} className=' borda form-control text-center ' ></input> 
            <input onChange={(e)=>setLeitura14(e.target.value)} value={leitura14} className=' borda form-control text-center ' ></input>  
            <input onChange={(e)=>setLeitura15(e.target.value)} value={leitura15} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setLeitura16(e.target.value)} value={leitura16} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setLeitura17(e.target.value)} value={leitura17} className=' borda form-control text-center ' ></input>   
            <input onChange={(e)=>setLeitura18(e.target.value)} value={leitura18} className=' borda form-control text-center ' ></input>     
        </div>

        <div className="col-2">
        <br/><br/>
           <h6>Comprimento do topo do revestimento até a profundidade final do ensaio</h6>  
           <input onChange={(e)=>setH(e.target.value)} disabled value={h} className=' borda form-control text-center ' placeholder="(m)"></input>

           <br/><br/><br/>

           <h6 className=' mt-5 '>Diâmetro do furo</h6>  
           <input onChange={(e)=>setD(e.target.value)} /* disabled */ value={d} className=' borda form-control text-center ' placeholder="(cm)"></input>       

        </div>

        <div className="col-1">
       <br/><br/><br/><br/><br/>
       <div className="offset-5 me-5 mt-5 " style={{ width: '115px', height: '2px',backgroundColor: 'gray', transformOrigin: '0 100%',transform: 'rotate(1deg)',}}></div> 
       <br/><br/><br/><br/>
       
       <br/><br/><br/><br/>
       <div className="offset-5 me-5  " style={{ width: '160px', height: '2px',backgroundColor: 'gray', transformOrigin: '0 100%',transform: 'rotate(13deg)',}}></div> 
         
        </div>

        <div className="col-3  ">
             <img src={base64String} alt="Imagem Base64" />
        </div>

       <div className="col-1 ">
       <br/><br/><br/><br/><br/>
       <div className="offset-5 me-5  " style={{ width: '155px', height: '2px',backgroundColor: 'gray', transformOrigin: '0 100%',transform: 'rotate(198deg)',}}></div> 
       <br/><br/><br/><br/>
       <div className="offset-5 me-5  " style={{ width: '112px', height: '2px',backgroundColor: 'gray', transformOrigin: '0 100%',transform: 'rotate(196deg)',}}></div> 
       <br/><br/><br/><br/><br/><br/>
       <div className="offset-5 me-5  " style={{ width: '140px', height: '2px',backgroundColor: 'gray', transformOrigin: '0 100%',transform: 'rotate(190deg)',}}></div> 
         
        </div>

       <div className="col-2 me-5 ">

        <h6 >Obs: se o furo estiver seco, escrever "SECO" nas duas caixas de profundidade do NA abaixo:</h6>

        <br/>

        <h6>Comprimeto do topo do revestimeto até o NA</h6>
        <input onChange={(e)=>setH1(e.target.value)} value={h1} className=' borda form-control text-center ' placeholder="(m)"></input>

        <br/><br/>

        <h6>Profundidade do NA em relação ao terreno</h6>
        <input onChange={(e)=>setNA(e.target.value)} value={na} className=' borda form-control text-center ' placeholder="(m)"></input>

               <br/>

        <h6 className="mt-3">Comprimento do trecho ensaiado</h6>
        <input onChange={(e)=>setL(e.target.value)} value={l} disabled className=' borda form-control text-center ' placeholder="(m)"></input>
    
        </div>

        </div>
        </div>
      </body>



      <body className='container-xl text-center d-flex mt-5'>
      <div class="col  align-items-center justify-content-center  ">
    <div class="row d-flex align-items-center justify-content-center ">

        <div className='col-5 text-center '>           
             <h5>LEFRANC</h5>

             <input onChange={(e)=>setKlefranc(e.target.value)} value={result2} className=' mt-3 mb-2  borda form-control text-center ' ></input> 

             <img src={base64String1} alt="Imagem Base64" />

             <div className="text-start offset-5 ms-5">

                <h6>Onde, </h6>
                <h6> Q – vazão (cm³/s); </h6>
                <h6> L – comprimento da área molhada (cm); </h6>
                <h6> hc – comp. do topo do tubo a média do trecho ensaiado (cm); </h6>
                <h6> D – diâmetro do furo (cm).</h6>
            </div>
        </div>


        <div className='col-3  text-center '>
            <h5>ABGE</h5>

            <input onChange={(e)=>setKabge(e.target.value)} value={result} className=' mt-3 mb-2  borda form-control text-center ' ></input> 

            <img src={base64String2} alt="Imagem Base64" />

            <div className="text-start offset-5 ms-5">

                <h6>Onde, </h6>
                <h6> Q – vazão (cm³/s); </h6>
                <h6> h - altura total (cm); </h6>
                <h6> Cu - relações geométricas - Ábaco </h6>
                <h6> r - raio do furo (cm).</h6>
            </div>
        
        </div>

        </div>
        </div>
      </body>

      <body className="container text-center cinzaclaro mt-4 p-2">
        <h6> OBS: QUANDO A VAZÃO TOTAL DA BOMBA FOR ATINGIDA, ANOTAR O VALOR TOTAL DA BOMBA EM "LITROS POR MINUTO"</h6>
      </body>



      <body className="container mt-5">

        <h6>Comentários</h6>

        <textarea onChange={(e)=>setComentario(e.target.value)} value={comentario} className="form-control borda resize"></textarea>

      </body>


 {/*      <div class="row   align-items-end justify-content-end p-3 ">                   
                  <div class="col-3 me-5 ">                   
                     <button onClick={()=> Calcular(h, hd1)  }  class="botaoadicionar " >calcular</button>                                         
                  </div>                                    
       </div> */}

      <div class="row   align-items-end justify-content-end p-3 ">                   
                  <div class="col-3 d-flex me-5 "> 
                     <button onClick={() =>GerarPDF()} className="btn btn-danger btn-cli" ><i className="far fa-file-pdf"></i> Gerar PDF </button>                   
                     <button  onClick={()=>AtualizaOuCria()} class="botaoadicionar " >salvar</button>                                         
                  </div>                                    
       </div>


{/*        <div class="row d-flex align-items-end justify-content-end offset-5 me-2 p-3 mt-2 ">                   
             <div class="col-4">              
             <button onClick={() =>GerarPDF()} className="btn btn-danger btn-cli" ><i className="far fa-file-pdf"></i> Gerar PDF </button>                                         
             </div>                                
            </div>   */} 







      <br/><br/>


  
    </body>
};
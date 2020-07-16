STS  other condition                 Status 
P                                   *Pending
1                                   =Prem.Paying
2                                   =Prem.Waive
3                                   =Paid up. 
4    billtype=P                     =Paid Up.Single Premium
4    cvgplandesc(3,3)='ETI'||'   '  =ETI 
4    cvgplandesc(3,3)='RPU'         =RPU 
4                                   =Fully Paid 
A                                   xNot Taken.
B                                   xLapsed 
C                                   *Complete
DC                                  xDecline(NB)
D                                   xDeath
EA                                  xForeclosure
EO                                  xOver Loan 
E                                   xSurrender
F                                   xMatured
H                                   xExpired
R                                   xReject
R    rejreasn=DC                    xDecline(NB)
R    rejreasn=FC                    xClose(NB)
R    rejreasn=NT                    xNot Taken.
R    rejreasn=PP                    xPostPone(NB)
T                                    Replaced 
W                                    Vested Annually
X                                    Converted
Y                                   xVoid 180d
Z                                   xVoid 2Yr
P                                   *Memo
N                                   xNot Taken(NB)
ELSE                                 NOT FOUND

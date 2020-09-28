# 
A Javascript library for Vedic 4-valued logic.

* T - True.
* F - False.
* B - (Both) a binary fuzzy(partial) truth value.
* N - (Neither) Neither true nor false / Not Applicable.

# NOT Table

| Value     | Not Value  |
| ------------- | -----:|
| True      | False |
| Both      | Both |
| Neither      | Neither |
| False       | True |

# AND Table

| X AND =>     | True  | Both |  Neither | False |
| ------------- | :-----:| :-----:| :-----:| -----:| 
| True     | True  | Both |  Neither | False |
| Both      | Both  | Both |  False | False |
| Neither     | Neither  | False  |  Neither | False |
| False      | False  | False |  False | False |

# OR Table

| X OR =>     | True  | Both |  Neither | False |
| ------------- | :-----:| :-----:| :-----:| -----:| 
| True     | True  | True |  True | True |
| Both     | True  | Both |  True | Both |
| Neither     | True  | True |  Neither | Neither |
| False     | True  | Both |  Neither | False |


<BR>
  
* https://en.wikipedia.org/wiki/Catu%E1%B9%A3ko%E1%B9%ADi
* http://www.filosofia.unimi.it/dagostino/wp-content/uploads/2017/05/Belnap.pdf
* https://github.com/sebs/es6-fuzz
* https://airccj.org/CSCP/vol7/csit77406.pdf
* http://www.pitt.edu/~belnap/howacomputershouldthink.pdf
* https://projecteuclid.org/download/pdf_1/euclid.ndjfl/1063372199
* https://www.ijcai.org/Proceedings/97-1/Papers/021.pdf
* http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.98.6984&rep=rep1&type=pdf


BRANCH=""

# Gets the parameters
while getopts b:e:c: option; do
  case "${option}" in
  b) BRANCH=${OPTARG} ;;
  esac
done

# Checks if there are uncommitted changes
STATUS="$(git status | egrep '(Changes .*? commit(ted)?:)|(Your branch is behind)')"
if [ -n "$STATUS" ]; then
  echo "========> Existem arquivos alterados ou novos arquivos sem commit"
  echo "$STATUS"
  exit 1
fi

# Checks if the branch exists
BRANCH_EXISTS=$(git branch | grep "\b$BRANCH\b")
if [ -z "$BRANCH_EXISTS" ]; then
  echo "Branch $BRANCH does not exist."
  exit 1
fi

# Checkout the branch 
git checkout $BRANCH

# Push to heroku
git push heroku $BRANCH:main
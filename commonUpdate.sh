echo "**"
echo "Base Package update in all microservice"
echo "**"

cd './gateway'
echo ${PWD}
npx yarn upgrade @modish-backend/base@latest

echo "**"
cd '../user'
echo ${PWD}
npx yarn upgrade @modish-backend/base@latest

echo "**"
cd '../product'
echo ${PWD}
npx yarn upgrade @modish-backend/base@latest

echo "**"
cd '../inventory'
echo ${PWD}
npx yarn upgrade @modish-backend/base@latest

echo "**"
cd '../order'
echo ${PWD}
npx yarn upgrade @modish-backend/base@latest

echo "**"
cd '../log'
echo ${PWD}
npx yarn upgrade @modish-backend/base@latest
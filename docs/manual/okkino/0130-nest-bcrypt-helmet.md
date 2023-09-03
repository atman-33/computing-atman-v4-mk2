## bcrypt

### install packages

```bash
npm i bcrypt
npm i -D @types/bcrypt
```

add bcrypt.hash in user.service.ts

```ts
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createOneUserArgs: CreateOneUserArgs) {
    const { data } = createOneUserArgs;
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltOrRounds);
    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword
      }
    });
  }
  ...
```

---

## helmet

### install packages

```bash
npm i --save @fastify/helmet
```

- register helmet
- enable cors

`apps/api/src/main.ts`

```ts
...
import helmet from '@fastify/helmet'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  // TODO: contentSecurityPolicy should turn on in production
  await app.register(helmet, { contentSecurityPolicy: false });
  app.enableCors();
  ...
```
